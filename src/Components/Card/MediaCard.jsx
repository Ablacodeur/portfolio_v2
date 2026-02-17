import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({project}) {
  
  return (
    <Card sx={{ maxWidth: 335 ,maxHeight:500}}>
      <CardMedia
        component="img"
        height="380"
        image={project.image_path}      // ex: "/assets/projects/task.png"
        alt={project.name}
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
