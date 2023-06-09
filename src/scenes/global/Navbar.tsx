import { Box, IconButton, Badge } from "@mui/material"
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import { shades } from "../../theme";

export const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()


  return (
    <Box display='flex' alignItems='center' width='100%' height='60px' bgcolor='white' color='black' position='fixed' top='0' left='0' zIndex='1'>
      <Box width='80%' margin='auto' display='flex' justifyContent='space-between' alignItems='center'></Box>
    </Box>
  )
}
