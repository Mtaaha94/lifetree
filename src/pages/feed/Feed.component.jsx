import React from "react";
//? Styles
import "./feed.styles.scss";
//? Components
import Feed from "../../components/feed/Feed.component";
import CreateFeed from "../../components/createFeed/CreateFeed.component";
import { Grid, Box } from "@material-ui/core";
//? Feed Data
import { feed } from "./data";

const FeedPage = ({ user }) => {
  return (
    <Box clone order={{ xs: 3, sm: 3, md: 2 }}>
      <Grid item md={5} sm={12} xs={12}>
        <div className="feed-page">
          <CreateFeed image={user.picture} />
          {feed.map(({ text, image, messages, key }) => (
            <Feed
              key={key}
              user={user}
              text={text}
              image={image}
              comments={messages}
            />
          ))}
        </div>
      </Grid>
    </Box>
  );
};

export default FeedPage;
