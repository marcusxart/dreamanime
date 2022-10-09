import React, { useEffect, useState } from "react";
import styled from "styled-components";

import api from "../../fetch/gogoanimeFetch";

import Grid from "../../components/Grid";
import Card from "../../components/Card";

const LastestContent = () => {
  const [recentEpisodes, setRecentEpisodes] = useState([]);

  useEffect(() => {
    const fetchRecentEpisodes = async () => {
      try {
        const res = await api.get("/recent-release");
        console.log(res);
        if (res && res.data) setRecentEpisodes(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRecentEpisodes();
  }, []);

  return (
    <Container>
      <Header>
        <h2>recently updated</h2>
      </Header>
      <Grid>
        {recentEpisodes.map((data) => (
          <Card
            key={data.animeId}
            img={data.animeImg}
            title={data.animeTitle}
            episode={data.episodeNum}
            isSub={data.subOrDub}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default LastestContent;

const Container = styled.div`
  padding: 2rem;
`;

const Header = styled.div`
  text-transform: uppercase;
  padding: 1rem 0;

  @media screen and (min-width: 600px) {
    padding: 1.8rem 0;
  }
`;
