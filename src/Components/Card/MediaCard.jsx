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
    border: "2px solid rgba(43, 122, 67, 0.65)",
    transition: "transform 0.3s ease, border 0.3s ease",
    overflow: "hidden",

    transform: "scale(0.95)",   

    "&:hover": {
      transform: "scale(1)",    
      border: "1px solid rgba(178, 112, 79, 0.65)",
    },

    marginBottom: { xs: "auto", md: "3px" }
  }}
><CardMedia
  component="img"
  image={project.image_path}
  alt={project.name}
  sx={{
    height: { xs: "220px", md: "300px" },
    transition: "transform 0.4s ease",

    ".MuiCard-root:hover &": {
      transform: "scale(1.1)",
    }
  }}
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
        <Button size="small" onClick={handleSeeMore}>
        <Typography sx={{fontSize: {xs:'23px',md:'26px'} ,textDecoration:'none',color:'#e49c96',fontFamily: "Corinthia",textTransform:'capitalize' }}>See More</Typography>
        </Button>
      </CardActions>
    </Card>
  );
}
