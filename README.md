# beleiveme_Reactjs_Master_Course
Create user interfaces from components
React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, 
LikeButton, and Video. Then combine them into entire screens, pages, and apps.

Write components with code and markup
React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.

function VideoList({ videos, emptyHeading }) {
  const count = videos.length;
  let heading = emptyHeading;
  if (count > 0) {
    const noun = count > 1 ? 'Videos' : 'Video';
    heading = count + ' ' + noun;
  }
  return (
    <section>
      <h2>{heading}</h2>
      {videos.map(video =>
        <Video key={video.id} video={video} />
      )}
    </section>
  );
}
