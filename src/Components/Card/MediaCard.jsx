import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useNavigate } from 'react-router-dom';

export default function MediaCard({project}) {
  const navigate = useNavigate()
  const handleSeeMore = () => {
    navigate(`/theproject/${project.id}`); 
  };
  return (
      <Card
        sx={{
          maxWidth: 320,
          borderRadius: "24px",
          border: "1px solid rgba(0,0,0,0.12)",
          boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: "0 12px 35px rgba(0,0,0,0.15)",
            transform: "translateY(-6px)",
            border: "1px solid rgba(0,0,0,0.25)",
          },
    }}
    >

      <CardMedia
        component="img"
        image={project.image_path}    
        alt={project.name}
        sx={{ height:{xs:'220px',md:'300px'} }}
        
      />

      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {project.name}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 1, 
            WebkitBoxOrient: "vertical",
          }}
        >
          {project.description}
      </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleSeeMore}>See More</Button>
      </CardActions>
    </Card>
  );
}
