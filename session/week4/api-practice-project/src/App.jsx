import styled from 'styled-components';
import { GlobalStyle } from './style/GlobalStyle';

import { useEffect, useState } from 'react';
import Post from './components/Post';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  // GET
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setData(data.data);
    };
    fetchData();
  }, []);

  // POST
  const postData = async () => {
    try {
      await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: '제목',
        body: 'sfsfsf',
        userId: 1,
      });
      console.log('성공했다.');
    } catch (err) {
      console.log(err);
    }
  };

  // postList

  const postList = data ? (
    data.map((item) => {
      return <Post key={item.id} title={item.title} body={item.body} />;
    })
  ) : (
    <p>loading...</p>
  );
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <CreateButton onClick={postData}>새로운 글 생성</CreateButton>
        {postList}
      </AppContainer>
    </>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100vw;
  background-color: beige;
`;

const CreateButton = styled.button`
  font-size: 20px;
`;
