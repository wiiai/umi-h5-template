const fs = require('fs');

const swaggerJson = require('./document.json');

const genAPI = (name, url, method, options) => {
  const { reqModel, reqModelName, resModel, resModelName } = options;
  const list = [];
  if (reqModel && resModel) {
    list.push(`export ${reqModel}\n`);
    list.push(`export ${resModel}\n`);
    list.push(`export const ${name} = (params: ${reqModelName}) => {
  return request<${resModelName}>({
    url: "${url}",
    method: "${method}",
    data: params
  });\n}`);
  } else if (reqModel) {
    list.push(`export ${reqModel}\n`);
    list.push(`export const ${name} = (params: ${reqModelName}) => {
  return request<{}>({
    url: "${url}",
    method: "${method}",
    data: params
  });\n}`);
  } else if (resModel) {
    list.push(`export ${resModel}\n`);
    list.push(`export const ${name} = (params: {}) => {
  return request<${resModel}>({
    url: "${url}",
    method: "${method}",
    data: params
  });\n}`);
  } else {
    list.push(`export const ${name} = (params: {}) => {
  return request<{}>({
    url: "${url}",
    method: "${method}",
    data: params
  });\n}`);
  }

  return list.join('\n');
};

const tagMap = {
  default: [],
};

const apiPathMap = swaggerJson.paths;
const apiPaths = Object.keys(apiPathMap);

function parseRequestParams(path) {
  const paths = path.replace('#/', '').split('/');
  let res = swaggerJson;
  let index = 0;
  while (index < paths.length) {
    res = res[paths[index]];
    index++;
  }

  const { properties } = res;
  let list = [];
  Object.keys(properties).forEach((key) => {
    list.push(`  ${key}: ${properties[key].type};`);
  });
  const name = paths[paths.length - 1];
  return {
    name: paths[paths.length - 1],
    content: `interface ${name} {\n${list.join('\n')}\n}`,
  };
}

apiPaths.forEach((apiPath) => {
  const pathConf = apiPathMap[apiPath];

  Object.keys(pathConf).forEach((method) => {
    const handleConf = pathConf[method];
    const apiPaths = apiPath.split('/');

    const reqParams =
      handleConf.requestBody?.content?.['application/json']?.['schema']?.$ref;
    const reqModel = reqParams ? parseRequestParams(reqParams) : null;

    const resParams =
      handleConf.responses?.default?.content?.['application/json']?.['schema']
        ?.$ref;
    const resModel = resParams ? parseRequestParams(resParams) : null;

    const item = genAPI(
      apiPaths[apiPaths.length - 1],
      apiPath,
      method.toLocaleUpperCase(),
      {
        reqModel: reqModel ? reqModel.content : '',
        reqModelName: reqModel ? reqModel.name : '',
        resModel: resModel ? resModel.content : '',
        resModelName: resModel ? resModel.name : '',
      },
    );

    if (handleConf.tags && handleConf.tags.length) {
      const tag = handleConf.tags[0];
      tagMap[tag] = tagMap[tag] || [];
      tagMap[tag].push(item);
    } else {
      tagMap['default'].push(item);
    }
  });
});

Object.keys(tagMap).forEach((tag) => {
  fs.writeFileSync(
    `src/service/${tag}.ts`,
    `import { request  } from "@/utils/request";\n\n` +
      tagMap[tag].join('\n\n'),
  );
});

console.log(tagMap);
