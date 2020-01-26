import React,{useState, useEffect} from "react"
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Header from "../../components/Header"
import {
    Welcome,Agender, 
    About,KeyboardArrowUp, 
    LogoSobre,
    Instructions,
    Equip,
    FooterUfalLeft,
    FooterRight,
    Sociais
} from "./styles"
import {MdKeyboardArrowUp, MdEmail} from "react-icons/md"
import {IoLogoFacebook, IoLogoLinkedin, IoLogoGithub} from "react-icons/io"
import {FaInstagram, FaFacebook, FaTwitter, FaYoutube} from "react-icons/fa"
import {Link} from "react-router-dom"
import {IconButton, Typography, 
        Grid, useMediaQuery, 
        CardActionArea, CardActions,
        CardContent, CardMedia,
        Card} from "@material-ui/core"

import backgroundImage from "../../assets/background_header.jpg"
import logo from "../../assets/logo-full.png"
import profileItalo from "../../assets/profile2.jpg"
import profileDalgoberto from "../../assets/profile2.jpg"
import profileValdemir from "../../assets/profile2.jpg"
import profileAntony from "../../assets/profile2.jpg"
import profileClovis from "../../assets/profile2.jpg"
import logoUfalWhite from "../../assets/ufal-white.png"

const useStyles = makeStyles({
    root:{
        position: 'relative',
        backgroundColor: '#e0e0e0',
        width: '100%',
        height: '100%',
        paddingTop: '50px'
    },
    imgBackground: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        filter: 'brightness(45%)'
    },
    container: {
        position: 'absolute',
        top: '110px',
        width: '100%'
    },
    agender: {
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        paddingTop: '6em'
    },
    about:{
        width: '100%',
        backgroundColor: '#fff',
        paddingBottom: '30px'
    },
    instructions: {
        backgroundColor:'#0095DA',
        width:' 100%',
        paddingBottom: '30px'
    },
    card: {
        paddingTop: '0px',
        width: '660px',
        height: '600px',
      },
    media: {
        borderRadius: '40%',
        height: '250px',
        width: '100%'
    },
    sociais: {
        padding: '0 10px',
        color: '#fff !important',
    }
})

export default function Home(){
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    const classes = useStyles();

    const [buttonInitial, setButtonInitial] = useState(false)

    const getScrool = () => {
        if(document.documentElement.scrollTop > 400){
            setButtonInitial(true)
        } else if(document.documentElement.scrollTop < 230){
            setButtonInitial(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', getScrool);
    }, [])

    const CardProfile = ({profile}) => {
        return(
        <Card className={classes.card}>
            <CardActionArea style={{height: '100%', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                <CardMedia
                className={classes.media}
                image={profile.profile}
                title={profile.title}
                />
                <CardContent>
                <Typography gutterBottom variant="h6" component="h5">
                    {profile.func}
                </Typography>
                <Typography gutterBottom variant="h6" component="h5">
                    {profile.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {profile.description}
                </Typography>
                </CardContent>
                <CardActions style={{display: 'flex', justifyContent: 'center', }}>
                    <a href="www.gooogle.com.br"><MdEmail size={32}/></a>
                    <a><IoLogoFacebook size={32}/></a>
                    <a><IoLogoLinkedin size={32}/></a>
                    <a><IoLogoGithub size={32}/></a>
                </CardActions>      
            </CardActionArea>
        </Card>
        )
    }

    const profiles = [
        {func:"Coordenador do Projeto", 
        title:'Dalgoberto Miquilino', 
        description: `Aluno do curso de Sistemas de informação - Unidade Penedo, 7º período. Formado
        em técnico em informática, pesquisador do grupo de Pesquisa Estudos Avançados
        em Ciência de Dados e Engenharia de Software.`,
        profile: profileDalgoberto
        },
        {func:"Líder de Projeto", 
        title:'Ítalo Lima', 
        description: `Aluno do curso de Sistemas de informação - Unidade Penedo, 7º período. Formado
        em técnico em informática, pesquisador do grupo de Pesquisa Estudos Avançados
        em Ciência de Dados e Engenharia de Software.`,
        profile: profileItalo
        },
        {func:"Desenvolvedor", 
        title:'Valdemir Júnior', 
        description: `Aluno do curso de Sistemas de informação - Unidade Penedo, 7º período. Formado
        em técnico em informática, pesquisador do grupo de Pesquisa Estudos Avançados
        em Ciência de Dados e Engenharia de Software.`,
        profile: profileItalo
        },
        {func:"Desenvolvedor", 
        title:'Clóvis Vieira', 
        description: `Aluno do curso de Sistemas de informação - Unidade Penedo, 7º período. Formado
        em técnico em informática, pesquisador do grupo de Pesquisa Estudos Avançados
        em Ciência de Dados e Engenharia de Software.`,
        profile: profileItalo
        },
        {func:"Líder de Projeto", 
        title:'Ântones Lima', 
        description: `Aluno do curso de Sistemas de informação - Unidade Penedo, 7º período. Formado
        em técnico em informática, pesquisador do grupo de Pesquisa Estudos Avançados
        em Ciência de Dados e Engenharia de Software.`,
        profile: profileItalo
        }
]

    return(
        <>
            <Header/>
            {buttonInitial && 
                <KeyboardArrowUp>
                    <IconButton onClick={() => window.scrollTo(0, 0)}>
                        <MdKeyboardArrowUp style={{color:"#fff", }}  
                        size={matches ? 40 : 30 }
                        />
                    </IconButton> 
                </KeyboardArrowUp>
            }
            
            <Grid container className={classes.root}>
                <img className={classes.imgBackground} src={backgroundImage} alt="" />
                <Grid item xs={12} sm={12} lg={12} className={classes.container}>
                    <Welcome>
                        <h1>Bem vindo ao Register</h1>
                        <p>Software responsável pelos agendamentos <br/>de equipamentos da UFAL Unidade Penedo </p>
                        <Grid item xs={12} sm={12} lg={12} className={classes.agender}>
                            <Agender>
                                <h2>Reliaze seu agendamento agora</h2>
                                <span>rápido e fácil</span>
                                <Link to='/register'>
                                    <button> 
                                        <p>Agendar agora mesmo</p>
                                    </button>
                                </Link>
                            </Agender>
                        </Grid>
                    </Welcome>
                </Grid>
            </Grid>
             
            <Grid container id="about">
                <Grid item xs={12} sm={12} lg={12} className={classes.about}>
                    <About>
                    <h1>Sobre</h1>
                    <div>
                        <LogoSobre>
                            <img src={logo} />
                        </LogoSobre>
                        <div>
                            <Typography>
                            Register surgiu em fevereiro de 2020, advento da 
                            disciplina de Gestão do Conhecimento. O desenvolvimento desta ferramenta
                            constituiu de tecnoligias de ponta do mercado, atualmente. Seu Backend foi
                            desenvolvido em NodeJS e Frontend usou-se a biblioteca React Js e Material-Ui. 
                            Constituindo seu ambiente totalmente desenvolvido com JavaScript.
                            </Typography>
                            <Typography>
                            Na instituição de ensino UFAL - Unidade Penedo,
                            existe um problema para conseguir realizar agendamento de equipamentos,
                            os professores relatam diversos transtornos: Alto 
                            número de conflitos de horários; Falta de informação sobre quais equipamentos 
                            estão em funcionamento; Com qual professor estaria usando equipamento, 
                            entre outros.
                            </Typography>
                            <Typography>
                            Portanto, Register tem por objetivo automatizar o processo de agendamento
                            de equipamentos da referente Unidade de Ensino, permitindo que professores
                            possam realizar agendamentos com antecedência, facilitando o acesso a 
                            informações sobre os equipamentos que estão em pleno funcionamento, quais dias
                            existem reservas. 
                            </Typography> 
                            <Typography> 
                            Com este processo de automatização, professores tornam-se mais dinâmicos, conseguindo
                            determinar com antecedência quais métodos de ensino será aplicado. Evitando
                            surpresas indesejadas (mal funcionamento do equipamento).
                            </Typography>
                        </div>
                    </div>
                </About>
            </Grid>
        </Grid>
            
        <Grid container>
            <Grid item xs={12} sm={12} lg={12} className={classes.instructions}>
                <Instructions id="instrucoes">
                    <h1>Instruções de Uso</h1>
                    <div>
                        <Typography>
                            Register está em sua primeira versão, desse modo, problemas podem surgir
                            ao realizar agendamento de equipamentos, caso chegue a ocorrer algum problema,
                            pedimos que entre em contato com admistrador desta plataforma e reporte
                            o problema ocasionado, para que assim possamos evoluir esta ferramenta.
                        </Typography>
                        <Typography>
                            Esta plataforma usa WebSocket, comunicação bidirecional em tempo real, portanto,
                            qualquer cancelamento de registro será atualizado instantaneamente. Para
                            que possa ter acesso as funcionalidades do Register, necessita-se criação de
                            conta, mas está funcionadade é realizada exclusivamente pelo administrador,
                            para garantir que pessoas externas evitem usar esta ferramenta, evitando possíveis
                            transtornos para os usuários. 
                        </Typography>
                        <Typography>
                            Para retirada do equipamento, previamente agendado, necessita-se confirmar
                            a retirada do equipamento, após o término, realizar a confirmação de entrega
                            do equipamento. Assim podemos ter um controle real de tudo que acontece com
                            nossos equipamentos. Cada registro terá tolerância de tempo, 10 minutos,
                            para retirada, caso ultrapasse este tempo, agendamento será cancelado imediatamente.
                        </Typography>
                    </div>
                </Instructions>
            </Grid>    
        </Grid>   
        <Grid>
            <Grid>
                <Equip id="equip">
                    <h1>Equipe</h1>
                    <Grid container direction="column" >
                        <Grid container direction="row" justify="space-around" spacing={5} style={{margin: 0}}>
                            {profiles.map((v, i) => { return i < 2 &&
                                <Grid item xs={12} sm={5} lg={5} key={i}>
                                    <CardProfile profile={v} />
                                </Grid>}
                            )}
                            
                        </Grid>
                        <Grid container direction="row" justify="space-around" spacing={5} style={{margin: 0}}>
                            {profiles.map((v, i) => { return i >= 2 &&
                                    <Grid item xs={12} sm={5} lg={4} key={i}>
                                        <CardProfile profile={v} />
                                    </Grid>}
                            )}
                        </Grid>
                    </Grid>
                </Equip>
            </Grid>
        </Grid>
        <Grid container justify='center' style={{backgroundColor: "#000000", padding: '15px 0'}}>
            <Grid item xs={12} sm={10} lg={10}>
                <Grid container direction='row'>
                    <Grid item xs={12} sm={6} lg={6}>
                        <Grid container direction='column'>
                            <FooterUfalLeft>
                                <img src={logoUfalWhite} />
                                <h2>Universidade<br/> Federal de Alagoas</h2>
                            </FooterUfalLeft>
                            <Sociais>
                                <a target='_blank' href="http://www.facebook.com/ufaloficial" className={classes.sociais}>
                                    <FaFacebook style={{borderRadius: '50%'}} size={26}/>
                                </a>
                                <a target='_blank' href="http://www.twitter.com/ufaloficial" className={classes.sociais}>
                                    <FaInstagram style={{borderRadius: '50%'}} size={26}/>
                                </a>
                                <a target='_blank' href="http://www.instagram.com/ufaloficial" className={classes.sociais}>
                                    <FaTwitter style={{borderRadius: '50%'}} size={26}/>
                                </a>
                                <a target='_blank' href="http://www.youtube.com/ascomufal" className={classes.sociais}>
                                    <FaYoutube style={{borderRadius: '50%'}} size={26}/>
                                </a>
                            </Sociais>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6}>
                        <FooterRight>
                            <div>
                                <img src={logo} />
                                <img src={logo} />
                            </div>
                            <h6>Desenvolvido por alunos do 7º período</h6>
                        </FooterRight>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        </>
    )
}