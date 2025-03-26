import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Icon from '@mui/material/Icon';
import StarIcon from '@mui/icons-material/Star';

export default function MovieCard({movie}) {

    const { poster , title , director , rating , runtime , genre ,plot } = movie;

  return (
    <Grid item  xs={3}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height:200 }}
        image={poster}
        title="green iguana"
      />
      <CardContent>
        <div>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        </div>
        <div>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Directed by : {director}
        </Typography>
        </div>
        <div>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Genre : <Chip label={genre} />
        </Typography>
        </div>
        <div>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           Description : {plot}
        </Typography>
        </div>
        </CardContent>
        <CardActions>
        <div>
        <IconButton aria-label="add to favorites">
            <FavoriteIcon />
        </IconButton>
        </div>
        <div>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Duration : {runtime} minutes
        </Typography>
        </div>
        <div>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            <Icon>
                <StarIcon/>
            </Icon>
            {rating}
        </Typography>
        </div>
        
        
      </CardActions>
    </Card>
    </Grid>
  );
}
