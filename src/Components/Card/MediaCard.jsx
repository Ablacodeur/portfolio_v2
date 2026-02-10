import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import work1 from "../../assets/resources/work1_xs.png"

export default function MediaCard({project}) {
  
  return (
    <Card sx={{ maxWidth: 335 ,maxHeight:450}}>
      <CardMedia
        sx={{ height: 300 }}
        image={project.image_Path}
        title={project.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {project.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">See More</Button>
      </CardActions>
    </Card>
  );
}
