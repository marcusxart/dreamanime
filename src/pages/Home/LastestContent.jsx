import React, { useEffect, useState } from "react";
import styled from "styled-components";

import api from "../../fetch/gogoanimeFetch";

import Grid from "../../components/Grid";
import Card from "../../components/Card";
import Tabs from "../../components/Tabs";

const LastestContent = () => {
  const [recentEpisodes, setRecentEpisodes] = useState([]);
  const [switchTab, setSwitchTab] = useState(1);

  const tabs = [
    { id: 1, title: "sub" },
    { id: 2, title: "dub" },
    { id: 3, title: "chinese" },
  ];

  const handleSwitchTab = (id) => setSwitchTab(id);

  useEffect(() => {
    const fetchRecentEpisodes = async () => {
      try {
        const res = await api.get(`/recent-release?type=${switchTab}`);
        console.log(res);
        if (res && res.data) setRecentEpisodes(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRecentEpisodes();
  }, [switchTab]);

  return (
    <Container>
      <Header>
        <h2>recently updated</h2>
        <Tabs arr={tabs} activeTab={switchTab} handleSwitch={handleSwitchTab} />
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
  padding: 1rem 0 1.5rem;
  h2 {
    margin-bottom: 0.5rem;
    color: var(--primary);
  }
  @media screen and (min-width: 600px) {
    padding: 1.8rem 0;
  }
`;
