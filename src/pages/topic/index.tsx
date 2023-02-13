import { Loading } from '@/components/loading';
import { getTopicList, IFeedItem } from '@/service/topic';
import React, { useEffect, useState } from 'react';
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
      <div className="topic-item" key={key}>
        <div className="title">{it.title}</div>
        <div>{it.content}</div>
      </div>
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
