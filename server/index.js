const express = require("express");
const colors = require("colors");
const cors = require("cors");
const axios = require("axios");
const base64 = require("image-to-base64");
const { json } = require("express");
require("dotenv").config();
const app = express();
app.use(
  cors({
    origin: process.env.ORIGIN || "*",
  })
);
app.use(json());
const PORT = process.env.PORT || 5000;

console.clear();

app.listen(PORT, () =>
  console.log(
    `Server is running on ${
      process?.env?.DEV_ENV ? `http://localhost:${PORT}` : PORT
    }`
  )
);

// utils
const imgUrlToBase64 = async (url) => {
  const res = await base64(url);
  return `data:image/jpeg;base64,${res}`;
};

// instagram api

// home
app.get("/", async (req, res) => {
  res.send("Server is working!");
});

// instagram post

const cookie = process.env.COOKIE;
app.get("/p/:shortcode", async (req, res) => {
  try {
    const { shortcode } = req?.params;
    const url = `https://www.instagram.com/p/${shortcode}/?__a=1&__d=dis`;
    const { data } = await axios({
      url,
      method: "get",
      headers: {
        "user-agent":
          "Instagram 22.0.0.15.68 Android (23/6.0.1; 640dpi; 1440x2560; samsung; SM-G935F; hero2lte; samsungexynos8890; en_US)",
        cookie,
      },
      validateStatus: false,
    });

    if (data) {
      const carouselMedia = data?.items[0]?.carousel_media
        ? Promise.all(
            data?.items[0]?.carousel_media?.map(async (item) => ({
              id: item?.id,
              thumbnail: await imgUrlToBase64(
                item?.image_versions2?.candidates[0]?.url
              ),
              isVideo: item?.video_versions ? true : false,
              duration: item?.video_versions ? item?.video_duration : null,
              resources: item?.image_versions2?.candidates?.map((item) => ({
                src: item.url,
                width: item.width,
                height: item.height,
              })),
              videoResources: item?.video_versions
                ? item?.video_versions?.map((item) => ({
                    src: item.url,
                    width: item.width,
                    height: item.height,
                  }))
                : null,
            }))
          )
        : null;

      const jsonData = async () => {
        return {
          id: data?.items[0]?.id,
          caption: data?.items[0]?.caption?.text,
          shortcode: data?.items[0]?.code,
          likes:
            data?.items[0]?.edge_media_preview_like?.count ||
            data?.items[0]?.like_count,
          comments:
            data?.items[0]?.edge_media_to_parent_comment?.count ||
            data?.items[0]?.comment_count,
          isVideo: data?.items[0]?.video_versions ? true : false,
          timestamp: data?.items[0]?.taken_at,
          duration: data?.items[0]?.video_duration,
          hasAudio: data?.items[0]?.has_audio,
          views: data?.items[0]?.view_count,
          plays: data?.items[0]?.play_count,
          thumbnail: data?.items[0]?.carousel_media
            ? await imgUrlToBase64(
                data?.items[0]?.carousel_media[0]?.image_versions2
                  ?.candidates[0]?.url
              )
            : await imgUrlToBase64(
                data?.items[0]?.image_versions2?.candidates[0]?.url
              ),
          isCarousel: data?.items[0]?.carousel_media ? true : false,
          carouselCount: data?.items[0]?.carousel_media_count,
          singleMedia: data?.items[0]?.carousel_media
            ? null
            : {
                thumbnail: await imgUrlToBase64(
                  data?.items[0]?.image_versions2?.candidates[0]?.url
                ),
                isVideo: data?.items[0]?.video_versions ? true : false,
                duration: data?.items[0]?.video_duration,
                hasAudio: data?.items[0]?.has_audio,
                resources: data?.items[0]?.image_versions2?.candidates?.map(
                  (item) => ({
                    src: item.url,
                    width: item.width,
                    height: item.height,
                  })
                ),
                videoResources: data?.items[0]?.video_versions
                  ? data?.items[0]?.video_versions?.map((item) => ({
                      src: item.url,
                      width: item.width,
                      height: item.height,
                    }))
                  : null,
              },
          carouselMedia: data?.items[0]?.carousel_media
            ? await carouselMedia
            : null,
          user: {
            id: data?.items[0]?.user?.id,
            username: data?.items[0]?.user?.username,
            fullName: data?.items[0]?.user?.full_name,
            isVerified: data?.items[0]?.user?.is_verified,
            isPrivate: data?.items[0]?.user?.is_private,
            profilePic: await imgUrlToBase64(
              data?.items[0]?.user?.profile_pic_url
            ),
          },
        };
      };
      res.status(200).json(await jsonData());
    } else {
      res.status(200).json({
        error: "No data found",
      });
    }
  } catch (error) {
    console.log(colors.red(error.message));
    res.status(500).json({
      ...error,
      message: error.message,
    });
  } finally {
    console.log(colors.green(`Ended at: ${new Date().toLocaleString()}`));
  }
});

// user
app.get("/user/:username", async (req, res) => {
  try {
    const { username } = req.params;
    const { data } = await axios({
      url: `https://i.instagram.com/api/v1/users/web_profile_info/?username=${username}`,
      headers: {
        "user-agent":
          "Mozilla/5.0 (Linux; Android 9; GM1903 Build/PKQ1.190110.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.143 Mobile Safari/537.36 Instagram 103.1.0.15.119 Android (28/9; 420dpi; 1080x2260; OnePlus; GM1903; OnePlus7; qcom; sv_SE; 164094539)",
        cookie,
        validateStatus: false,
      },
    });
    const postData = data?.data?.user?.edge_owner_to_timeline_media?.edges
      ? Promise.all(
          data?.data?.user?.edge_owner_to_timeline_media?.edges?.map(
            async (item) => ({
              id: item?.node?.id,
              shortcode: item?.node?.shortcode,
              thumbnail: await imgUrlToBase64(item?.node?.display_url),
              location: item?.node?.location,
              caption: {
                main: item?.node?.edge_media_to_caption.edges[0]?.node.text,
                accessible: item?.node?.accessibility_caption,
              },
              comments: item?.node?.edge_media_to_comment.count,
              isVideo: item?.node?.is_video,
              likes: item?.node?.edge_liked_by.count,
              isCollection: item?.node?.edge_sidecar_to_children ? true : false,
              resolutions: item?.node?.thumbnail_resources,
            })
          )
        )
      : null;
    const jsonData = async () => {
      return {
        id: data?.data?.user?.id,
        bio: data?.data?.user?.biography,
        username: data?.data?.user?.username,
        profilePic: {
          thumbnail: await imgUrlToBase64(data?.data?.user?.profile_pic_url_hd),
          link: data?.data?.user?.profile_pic_url_hd,
        },
        link: data?.data?.external_url,
        category: data?.data?.user?.category_name,
        fullName: data?.data?.user?.full_name,
        isPrivate: data?.data?.user?.is_private,
        isVerified: data?.data?.user?.is_verified,
        followers: data?.data?.user?.edge_followed_by?.count,
        following: data?.data?.user?.edge_follow?.count,
        posts: {
          total: data?.data?.user?.edge_owner_to_timeline_media?.count,
          data: postData ? await postData : null,
        },
      };
    };
    res.status(200).json({
      ...(await jsonData()),
    });
  } catch (error) {
    console.log(colors.red(error.message));
    res.status(500).json({
      ...error,
      message: error.message,
    });
  }
});
