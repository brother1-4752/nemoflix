import styled from "styled-components";

const HomeContainer = styled.div`
  width: 100%;
  height: 400vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  .sidebar {
    width: 60px;
    height: 180px;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    position: fixed;
    right: 1em;
    top: 11em;
    font-size: 30px;

    .sellected {
      background-color: white;
    }
  }
`;

export default HomeContainer;

// export function getMovie(id: string) {
//     return fetch(`${BASE_URL}/movie?id=${id}`).then((r) => r.json());
//   }
