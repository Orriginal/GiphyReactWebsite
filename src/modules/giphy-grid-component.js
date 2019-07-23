import React, { useEffect, useState, useContext } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import GridListTileBar from "@material-ui/core/GridListTileBar";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  gridList: {
    width: "100%",
    height: "auto"
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  },
  icon: {
    color: "white"
  }
}));

export default function GiphyGridComponent(props) {
  const classes = useStyles();
  const { itemsArray, actions } = props;
  const [windowPostition, setWindowPosition] = useState("md");

  const grid = {
    xs: {
      col: [12, 12],
      maxPerRow: 1,
      rowHeight: 300
    },
    ms: {
      col: [6, 6],
      maxPerRow: 2,
      rowHeight: 300
    },
    md: {
      col: [4, 6],
      maxPerRow: 5,
      rowHeight: 400
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      switch (true) {
        case windowWidth < 600:
          setWindowPosition("xs");
          break;
        case windowWidth < 1000:
          setWindowPosition("ms");
          break;
        case windowWidth < 1800:
          setWindowPosition("md");
          break;
        default:
          setWindowPosition("md");
          break;
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    fetchItems();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [props.q]);

  const fetchItems = async () => {
    const key = "yhXkeAORtwThl9gFH4mX6nNBMScaBtqF";
    const limit = props.limit ? props.limit : 25;
    const data = await fetch(
      props.q
        ? `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${
            props.q
          }&limit=${limit}&offset=0&rating=G`
        : `https://api.giphy.com/v1/gifs/trending?api_key=${key}&limit=${limit}&rating=G`
    );
    const items = await data.json();

    await actions.setItems(items.data);
  };

  if (!Object.keys(itemsArray).length) {
    return <CircularProgress />;
  }

  const itemColCount = key => {
    const row = grid[windowPostition];
    return key % row.maxPerRow < Math.round(row.maxPerRow / 2)
      ? row.col[0]
      : row.col[1];
  };

  return (
    <Box className={classes.root} cols={12}>
      <GridList
        cellHeight={grid[windowPostition].rowHeight}
        className={classes.gridList}
        cols={12}
      >
        {itemsArray.map((item, key) => (
          <GridListTile
            key={item.images["fixed_width"].url}
            cols={itemColCount(key)}
          >
            <img src={item.images["fixed_width"].url} alt="gif" />

            <Link to={`/item/${item.id}`}>
              <GridListTileBar
                title={item.title}
                titlePosition="top"
                actionPosition="left"
                className={classes.titleBar}
              />
            </Link>
          </GridListTile>
        ))}
      </GridList>
    </Box>
  );
}
