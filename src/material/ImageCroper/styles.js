export const styles = (theme) => ({
    cropContainer: {
      position: "relative",
      width: "100%",
      height: 250,
      background: "#333",
      [theme.breakpoints.up("sm")]: {
        height: 400
      }
    },
    loginContainer: {
      width: "300px",
      height: "fit-content",
      display: "flex",
      flexDirection: "column",
      borderRadius: "5px",
      border: "1px solid lightgray",
      padding: "20px"
    },
    inputContainer: {
      height: "30px",
      borderRadius: "4px",
      marginBottom: "10px",
      backgroundColor: "white",
      width: "98%"
    },
    sorce: {
      position: "absolute",
      width: 1,
      height: 1,
      padding: 0,
      overflow: "hidden",
      cursor: "pointer",
      clip: "rect(0,0,0,0)",
      whiteSpace: "nowrap"
    },
    cropButton: {
      flexShrink: 0,
      marginLeft: 16
    },
    controls: {
      padding: 16,
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      [theme.breakpoints.up("sm")]: {
        flexDirection: "row",
        alignItems: "center"
      }
    },
    sliderContainer: {
      display: "flex",
      flex: "1",
      alignItems: "center"
    },
    sliderLabel: {
      [theme.breakpoints.down("xs")]: {
        minWidth: 65
      }
    },
    slider: {
      padding: "22px 0px",
      marginLeft: 16,
      [theme.breakpoints.up("sm")]: {
        flexDirection: "row",
        alignItems: "center",
        margin: "0 16px"
      }
    },
    appBar: {
      position: "relative",
      backgroundColor: "#FFFFFF"
    },
    headerLogo: {
      width: "120px",
      objectFit: "contain",
      margin: "0, 20px",
      marginTop: "18px"
    },
    flex: {
      flex: 1,
      color: "black"
    },
    imgContainer: {
      position: "relative",
      flex: 1,
      padding: 16,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    img: {
      maxWidth: "100%",
      width: 250,
      height: 406,
  
      objectFit: "contain"
    },
    imgTwo: {
      maxHeight: "460px",
      position: "fixed",
      maxWidth: "100%",
      objectFit: "contain",
      zIndex: "1"
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center"
    }
  });
  