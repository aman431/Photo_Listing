import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  makeStyles,
  createStyles,
  Button,
} from "@material-ui/core";
import { connect } from "react-redux";
import { image_Data } from "../../actions/Image";

const useStyle = makeStyles((theme) =>
  createStyles({
    root: {
      paddingBottom: "4rem",
    },
    header: {
      display: "flex",
      justifyContent: "center",
    },
    boxStyles: {
      marginTop: "2rem",
      display: "flex",
      float: "left",
      paddingLeft: "15%",
      flexDirection: "row",
      justifyContent: "center",
    },
    box: {
      height: "350px",
      width: "265px",
      marginBottom: "50px",
      border: "1px solid black",
    },
    text: {
      textAlign: "center",
      padding: "1rem",
    },
    button: {
      width: "100%",
      marginLeft: "35%",
      width: "20%",
    },
    image: {
      width: "45%",
      height: "4∂∂0%",
      padding: "5%",
      marginLeft: "71px",
    },
    table: {
      float: "none",
      marginTop: "1rem",
      padding: "10rem",
    },
    border: {
      border: "none",
    },
  })
);

function Index({ image_Data, imagedata }) {
  const styles = useStyle();
  const [Data, setData] = useState([]);
  useEffect(() => {
    image_Data();
    // setData(imagedata);
  }, [image_Data]);
  return (
    <Box>
      <Box className={styles.root}>
        <Typography variant="h2" className={styles.header}>
          Photo Listing
        </Typography>
        {imagedata?.slice(0, 3).map((item) => {
          return (
            <Box className={styles.boxStyles}>
              <Box className={styles.box}>
                <Typography variant="h4" className={styles.text}>
                  Image
                </Typography>
                <Typography className={styles.text}>{item.title}</Typography>
                <Typography className={styles.text}>{item.id}</Typography>
                <img
                  className={styles.image}
                  src={item.thumbnailUrl}
                  alt="Thumbnail"
                />
                <Button
                  className={styles.button}
                  variant="contained"
                  onClick={() => {
                    setData(imagedata);
                  }}
                >
                  Compare
                </Button>
              </Box>
            </Box>
          );
        })}
      </Box>
      {Data.length > 0 && (
        <Box className={styles.table}>
          <table className="ui celled table">
            <thead>
              <tr
                style={{
                  width: "100%",
                  textAlign: "center",
                  marginLeft: "50%",
                }}
              >
                <th style={{ border: "none" }}></th>
                <th style={{ border: "none" }}></th>
                <th style={{ border: "none" }}>COMPARSION TABLE</th>
                <th style={{ border: "none" }}></th>
              </tr>
            </thead>
            <thead>
              <tr>
                <th></th>
                <th>ID</th>
                <th>URL</th>
                <th>TITLE</th>
              </tr>
            </thead>
            {Data?.slice(0, 5).map((item, index) => {
              return (
                <tbody key={index}>
                  <tr>
                    <td>Photo{item.id}</td>
                    <td>{item.id}</td>
                    <td>{item.thumbnailUrl}</td>
                    <td>{item.title}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </Box>
      )}
    </Box>
  );
}

const mapStateToProps = (state) => ({
  imagedata: state.imagedata,
});

export default connect(mapStateToProps, { image_Data })(Index);
