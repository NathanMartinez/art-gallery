import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Divider,
  Avatar,
  List,
  ListItemAvatar,
  ListItemText,
  ListItem,
} from "@material-ui/core";
import {
  EventNote as EventNoteIcon,
  Send as SendIcon,
  Security as SecurityIcon,
  Chat as ChatIcon,
  Payment as PaymentIcon,
  Email as EmailIcon,
  StayPrimaryPortrait as StayPrimaryPortraitIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  YouTube as YouTubeIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon
} from "@material-ui/icons";
import "../../styles/profile-page.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function InsetDividers() {
  const classes = useStyles();

  return (
    <div className="profile-page">
      <List className={classes.root}>
        <ListItem>
          <ListItemAvatar>
            <Avatar
              alt="Cindy Baker"
              src="https://material-ui.com/static/images/avatar/2.jpg"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Profile Picture"

          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <EmailIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Email" secondary="natemtz@dev.io" />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <StayPrimaryPortraitIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Phone Number" secondary="+1 (505) 555-5555" />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <PaymentIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Payment Method" secondary="Visa ***3333" />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ChatIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Messages" secondary="Welcome Nathan, ..." />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <EventNoteIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Requests" />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <SendIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Submit a request" />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <SecurityIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Security Settings" />
        </ListItem>
        <Divider variant="middle" />
      </List>
      <div className="follow-container">
        <Typography gutterBottom variant="body1">
          Follow Us!
        </Typography>
        <div className="social-media-container">
          <FacebookIcon fontSize="large" className="facebook-icon" />
          <InstagramIcon fontSize="large" className="instagram-icon" />
          <TwitterIcon fontSize="large" className="twitter-icon" />
          <YouTubeIcon fontSize="large" className="youtube-icon" />
          <LinkedInIcon fontSize="large" className="linkedin-icon" />
        </div>
      </div>
    </div>
  );
}
