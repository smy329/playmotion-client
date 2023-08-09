import { useDispatch, useSelector } from 'react-redux';
import RelatedVideoItem from './RealtedVideoItem';
import { useEffect } from 'react';
import { fetchRelatedVideos } from '../../features/relatedVideos/relatedVideosSlice';
import Loading from '../ui/Loading';

const RelatedVideoList = ({ currentVideoId, tags }) => {
  const dispatch = useDispatch();
  const { relatedVideos, isLoading, isError, error } = useSelector((state) => state.relatedVideos);

  useEffect(() => {
    dispatch(fetchRelatedVideos({ id: currentVideoId, tags }));
  }, [dispatch, currentVideoId, tags]);

  //decide what to render
  let content = null;

  if (isLoading) content = <Loading />;

  if (!isLoading && isError) {
    content = <div className="col-span-12">{error}</div>;
  }

  if (!isLoading && !isError && relatedVideos?.length === 0) {
    content = <div className="col-span-12">Videos not found</div>;
  }

  if (!isLoading && !isError && relatedVideos?.length > 0) {
    content = relatedVideos.map((video) => <RelatedVideoItem key={video.id} video={video} />);
  }
  return <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">{content}</div>;
};

export default RelatedVideoList;
