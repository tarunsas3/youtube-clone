import React from "react";
import "./SearchPage.css";
import TuneOutLinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutLinedIcon />
        <h2> FILTER </h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s176-c-k-c0x00ffffff-no-rj"
        channel="Clever Programmer"
        verified
        subs="841K"
        noOfVideos={498}
        description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level"
      />
      <hr />
      <VideoRow
        views="12K views"
        subs="841K"
        description="Today I wanted to reveal the biggest opportunity for developers to grow their Youtube Channel in 2021"
        timestamp="1 week ago"
        channel="Clever Programmer"
        title="🔴 The BIGGEST Opportunity to Grow Your YouTube as a complete beginner"
        image="http://i3.ytimg.com/vi/ZcwI9-efSQw/maxresdefault.jpg"
      />
      <VideoRow
        views="6K views"
        subs="841K"
        description="Today I wanted to reveal  how to get your first 1,000 subscribers on your Youtube Channel in 2021"
        timestamp="6 days ago"
        channel="Clever Programmer"
        title="🔴 How to Get Your First 1,000 Subscribers on YouTube"
        image="http://i3.ytimg.com/vi/cNO55OT4stc/maxresdefault.jpg"
      />
      <VideoRow
        views="9K views"
        subs="841K"
        description="Today I wanted to reveal  how to make your first $1,000 on your Youtube Channel in 2021"
        timestamp="5 days ago"
        channel="Clever Programmer"
        title="🔴 How to Make Your First $1,000 with YouTube"
        image="http://i3.ytimg.com/vi/I2SzDAUawGo/maxresdefault.jpg"
      />
      <VideoRow
        views="8K views"
        subs="841K"
        description="Today I wanted to reveal how to plan your first $1M on Youtube Channel in 2021"
        timestamp="4 days ago"
        channel="Clever Programmer"
        title="🔴 Planning Your First $1M with YouTube"
        image="http://i3.ytimg.com/vi/aW260asFHB8/maxresdefault.jpg"
      />
      <VideoRow
        views="6K views"
        subs="841K"
        description="Today I wanted to reveal Your Roadmap to Becoming a YouTuber as a Developer"
        timestamp="3 days ago"
        channel="Clever Programmer"
        title="🔴 Your Roadmap to Becoming a YouTuber as a Developer"
        image="http://i3.ytimg.com/vi/eXR1sCcWbYg/maxresdefault.jpg"
      />
      <VideoRow
        views="5K views"
        subs="841K"
        description="Today I wanted to reveal How To Become A Successful Youtuber in less than 90 Days"
        timestamp="1 days ago"
        channel="Clever Programmer"
        title="🔴 How To Become A Successful Youtuber in less than 90 Days"
        image="http://i3.ytimg.com/vi/HxvGIjINk7s/maxresdefault.jpg"
      />
    </div>
  );
}

export default SearchPage;
