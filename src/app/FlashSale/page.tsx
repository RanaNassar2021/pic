'use client'
import React, { useState } from "react";
import { Box, Typography, Divider, Checkbox, Grid, Card, CardContent, CardMedia, Button } from "@mui/material";
import Header from "../Header";
import Footer from "../Footer";
import Filter from "../Filter/Filter";
import cardsData from '../Assets/StaticData/FlashSale.json';

// styles
import useStyles from "./FlashSale.Styles";

// Material ui
import * as MuiIcons from '@mui/icons-material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallIcon from '@mui/icons-material/LocalMall';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


export default function PicturaWomen() {
    const { classes } = useStyles();
    const Icons: any = MuiIcons;


    const [cards, setCards] = useState(cardsData)
    let sliderIntervals: NodeJS.Timeout[] = [];

    const handleMouseOver = (id: number) => {
        setCards(prev => prev.map(card => {
            if (card.id == id){
                card.isMouseOver = true;
                setInterval(() => {
                    if (card.currentImageIndex <= card.images.length) card.currentImageIndex += 1;
                    else  card.currentImageIndex;
                }, 1000)
            }
            return card
        }))
    }

 /*   const handleMouseEnter = (id: number) => {
        for (const card of cards) {
            if (card.id == id){
                sliderIntervals.push(setInterval(() => {
                    console.log(card.currentImageIndex)
                    if (card.images.length <= card.currentImageIndex) card.currentImageIndex = 0;
                    else card.currentImageIndex += 1;
                    setCards(prev => [...cards])
                }, 2000))
            }
        }
  }   */

    const handleMouseOut = (id: number) => {
        
        sliderIntervals.forEach(x => clearInterval(x));
        setCards(prev => prev.map(card => {
            if(card.id == id) {
                card.isMouseOver = false;
                card.currentImageIndex = 0;
            }
            return card
        }))
    }


    const [cart, setCart] = useState(false);

  



   function handleAddToCart (id: number) {
    setCart(true) ;
    setCards(prev => prev.map(x=>{
        if(x.id == id && cart == true) x.isClicked = true;
        return x
    }))
   };


    return (
        <React.Fragment>
            <Header></Header>
            <Box className={classes.filterMobile} sx={{ display: { xs: 'flex', md: 'none' } }}>
                <Typography variant="h3">filter</Typography>
                <Filter />
            </Box>
            <Box className={classes.container}>
                <Box className={classes.filterContainer} sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <Typography variant="h4"> <Icons.FilterList></Icons.FilterList> filter</Typography>
                    <Divider></Divider>
                    <Typography variant="h3"> Catergories </Typography>
                    <Divider style={{ width: '40px' }}></Divider>
                    <Box className={classes.options}>
                        <Checkbox {...label} />
                        <Typography>T-Shirts</Typography>
                    </Box>
                    <Box className={classes.options}>
                        <Checkbox {...label} />
                        <Typography>Polo</Typography>
                    </Box>
                    <Box className={classes.options}>
                        <Checkbox {...label} />
                        <Typography>High-Neck</Typography>
                    </Box>
                    <Box className={classes.options}>
                        <Checkbox {...label} />
                        <Typography>V-Neck</Typography>
                    </Box>
                    <Box className={classes.options}>
                        <Checkbox {...label} />
                        <Typography>Shirts</Typography>
                    </Box>
                    <Box className={classes.options}>
                        <Checkbox {...label} />
                        <Typography>Hoodies</Typography>
                    </Box>
                    <Box className={classes.options}>
                        <Checkbox {...label} />
                        <Typography>Top Rated</Typography>
                    </Box>
                    <Divider></Divider>
                    <Typography variant="h3"> Color </Typography>
                    <Divider style={{ width: '40px' }}></Divider>
                    <Box className={classes.options}>
                        <Checkbox {...label} />
                        <Typography>Black</Typography>
                    </Box>
                    <Box className={classes.options}>
                        <Checkbox {...label} />
                        <Typography>white</Typography>
                    </Box>
                    <Box className={classes.options}>
                        <Checkbox {...label} />
                        <Typography>Gray</Typography>
                    </Box>
                    <Box className={classes.options}>
                        <Checkbox {...label} />
                        <Typography>Red</Typography>
                    </Box>
                    <Box className={classes.options}>
                        <Checkbox {...label} />
                        <Typography>Blue</Typography>
                    </Box>
                    <Box className={classes.options}>
                        <Checkbox {...label} />
                        <Typography>Yellow</Typography>
                    </Box>
                    <Box className={classes.options}>
                        <Checkbox {...label} />
                        <Typography>Orange</Typography>
                    </Box>
                    <Box className={classes.options}>
                        <Checkbox {...label} />
                        <Typography>Green</Typography>
                    </Box>
                    <Box className={classes.options}>
                        <Checkbox {...label} />
                        <Typography>Purple</Typography>
                    </Box>
                    <Typography variant="h4"> <Icons.Sort></Icons.Sort> sort by</Typography>
                    <Divider></Divider>
                    <Box className={classes.options}>
                        <Checkbox {...label} />
                        <Typography>New In</Typography>
                    </Box>
                    <Typography variant="h3"> Price </Typography>
                    <Divider style={{ width: '40px' }}></Divider>
                    <Box className={classes.options}>
                        <Checkbox {...label} />
                        <Typography>Low to High</Typography>
                    </Box>
                    <Box className={classes.options}>
                        <Checkbox {...label} />
                        <Typography>High to low</Typography>
                    </Box>
                </Box>
                <Box className={classes.cards}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {cards.map(card => {
                            return (
                                <Grid item xs={2} sm={3} md={3} key={card.id}>
                                    <Card sx={{ maxWidth: 345 }}  onMouseOver={e => handleMouseOver(card.id)} onMouseOut={e => handleMouseOut(card.id)}
                                        className={classes.card}>
                                        <CardMedia
                                            sx={{ height: 220, }}
                                            image={card.images[0]}
                                            title="product image"
                                        />
                                        {card.isMouseOver ? (<Box className={classes.hoverBox}> <Box>
                                            <FavoriteBorderIcon></FavoriteBorderIcon>
                                        </Box>
                                            <Box>
                                                {
                                                    card.isClicked ? (<Box className={classes.sizes}>
                                                                        <Box className={classes.sizeBox}>
                                                                            XS
                                                                        </Box>
                                                                        <Box className={classes.sizeBox}>
                                                                             S
                                                                        </Box>
                                                                        <Box className={classes.sizeBox}>
                                                                             M
                                                                        </Box>
                                                                        <Box className={classes.sizeBox}>
                                                                             L
                                                                        </Box>
                                                                        <Box className={classes.sizeBox}>
                                                                             Xl
                                                                        </Box>
                                                                        <Box className={classes.sizeBox}>
                                                                             XXL
                                                                        </Box>
                                                                       </Box>) :(<Box><LocalMallIcon></LocalMallIcon> <Button onClick={e =>{handleAddToCart(card.id)}} sx={{color:'white'}}>Add to Cart</Button></Box>)
                                            }
                                               
                                            </Box>
                                        </Box>) : null}
                                        <CardContent className={classes.cardContent}>
                                            <Typography gutterBottom variant="h5" component="div" className={classes.cardTitle}>
                                                {card.title}
                                            </Typography>
                                            <Box className={classes.cardFooter}>
                                                <Typography color="text.secondary">{card.category}</Typography>
                                                <Typography>{card.price}</Typography>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            )
                        })
                        }

                    </Grid>
                </Box>
            </Box>

            <Footer></Footer>
        </React.Fragment>
    )
}