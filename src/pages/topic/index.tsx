import { Loading } from '@/components/loading';
import { getTopicList, IFeedItem } from '@/service/topic';
import { useEffect, useState } from 'react';
import { Link } from 'umi';
import './index.less';

const TopicList = () => {
  const [list, setList] = useState<IFeedItem[]>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getTopicList({
      pageIndex: 1,
      pageSize: 10,
    }).then((res) => {
      setList(res.data.list);
      setLoading(false);
    });
  }, []);

  const feedList = list?.map((it, key) => {
    return (
      // <Link to={`/topic/detail?${it.id}`}>
      <div className="topic-item" key={key}>
        <div className="feed-side">
          <img className="feed-avatar" src={it.author_avatar} alt="" />
          <span className="feed-name">{it.author_name}</span>
        </div>
        <div className="feed-main">
          <div className="head ui-mb-6">
            <span className="tag ui-mr-6">综合</span>
            <span className="create-time">发表时间：2020-07-24 01:47:46</span>
          </div>
          <div className="title">{it.title}</div>
          <div className="content">{it.content}</div>
        </div>
      </div>
      // </Link>
    );
  });

  return loading ? (
    <Loading />
  ) : (
    <div className="topic-screen g-w">
      <div className="topic-list">{feedList}</div>
    </div>
  );
};

export default TopicList;
