import Card from "@mui/material/Card";
import ButtonMore from "./ButtonMore";
import {CardActions, CardContent, Typography, Chip, Icon} from "@material-ui/core"

import Grid from "@mui/material/Grid";



const BasicCard = ({item} ) => {

  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const images = importAll(require.context('../assets/icons', false, /\.(png|jpe?g|svg)$/));
  let type = item.type;

 const icon = images['icon-'+type+'.svg']

  return (
    <Card sx={{ borderRadius: 2, minWidth: 450, marginBottom:2 }}>
      <Grid container>
        <Grid item xs={10}>
          <CardContent>
            <Typography variant="h5" component="div">
           {item.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} >
             {item.date}
            </Typography>
            <Chip label={item.location} color="primary" />
            <Icon sx={{}}>
              <img src={icon} alt="icon-date.svg" />
            </Icon>
          </CardContent>
        </Grid>
        <Grid item xs={2}>
          <CardActions>
           <ButtonMore/>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
};

export default BasicCard;
