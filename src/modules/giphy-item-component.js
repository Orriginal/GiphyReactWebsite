import React, { useEffect, useState, useContext } from "react";
import { CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import { red } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import Moment from "moment";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: "fit-content",
    width: "fit-content"
  },
  media: {
    height: "auto",
    paddingTop: "56.25%", // 16:9
    minWidth: "40vw",
    width: "auto",
    backgroundSize: "contain"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  },
  grid: {
    height: "calc(100vh - 64px)"
  }
}));

export default function Item({ itemsArray, actions, match }) {
  useEffect(() => {
    getItem();
  }, []);

  const [item, setItem] = useState({});
  const classes = useStyles();
  Moment.locale("nl");

  const getItem = () => {
    if (Object.keys(itemsArray).length) {
      const tempItems = itemsArray;
      const objIndex = tempItems.findIndex(obj => obj.id === match.params.id);
      setItem(tempItems[objIndex]);
    } else {
      fetchItem();
    }
  };

  const fetchItem = async () => {
    const data = await fetch(
      `https://api.giphy.com/v1/gifs/${
        match.params.id
      }?api_key=yhXkeAORtwThl9gFH4mX6nNBMScaBtqF`
    );
    const item = await data.json();

    setItem(item.data);
  };

  if (!Object.keys(item).length) {
    return <CircularProgress />;
  }

  if (item.user === undefined) {
    item["user"] = {
      display_name: "unknown",
      banner_image: "nothing"
    };
  }

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.grid}
    >
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              <img alt={item.user.display_name} src={item.user.banner_image} />
            </Avatar>
          }
          title={`Made by ${item.user.display_name}`}
          subheader={Moment(item.import_datetime).format("d MMMM Y")}
        />
        <CardMedia
          className={classes.media}
          image={item.images["fixed_width"].url}
          title="Paella dish"
        />
        <CardContent>{item.title}</CardContent>
      </Card>
    </Grid>
  );
}
