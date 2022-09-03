import { data } from "./data";

export function Home({ setIsWritePost }) {
  function handleWritePost() {
    setIsWritePost(true);
  }
  return (
    <div>
      {data.map((item) => (
        <div key={item.number}>
          <span>{item.number}</span>
          <span>{item.title}</span>
          <span> {item.writer} </span>
          <span> {item.date} </span>
          <span> {item.views} </span>
        </div>
      ))}
      <button onClick={handleWritePost}>글쓰기</button>
    </div>
  );
}
