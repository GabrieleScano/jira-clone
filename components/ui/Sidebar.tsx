import { Drawer, Box, Typography, List, ListItem, ListItemIcon } from '@mui/material'
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'

const menuItems = ['Inbox', 'Starred', 'Send email', 'Drafts']

export const Sidebar = () => {
  return (
    <Drawer
        anchor="left"
        open={true}
        onClose={() => console.log("close")}
    >
        <Box sx={{padding:'5px 10px'}}>
            <Typography variant="h4">
                Menù
            </Typography>
        </Box>
        <List>
            {
                menuItems.map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 ? <InboxOutlinedIcon /> : <EmailOutlinedIcon /> }</ListItemIcon>
                    </ListItem>
                ))
            }
        </List>
    </Drawer>
  )
}
