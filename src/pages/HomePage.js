// Imports
import React from 'react';
import { Helmet } from 'react-helmet';
import {
    Box,
    Chip,
    Container,
    Link,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Tooltip,
} from '@mui/material';
import { Home, Badge } from '@mui/icons-material';
import { loremIpsum } from 'react-lorem-ipsum';
import {createTitle} from '../utils'
import Configuration from '../configuration';

// Configuration
var { library, tag_prefix } = Configuration.articles;

class HomePage extends React.Component {
    constructor() {
        super();

        this.preformatTags = this.preformatTags.bind(this);
    }

    preformatTags(tags) {
        var returnedTags = [];
        tags.forEach((tag) => {
            returnedTags.push(tag_prefix + tag);
        });

        return returnedTags;
    }

    render() {
        return (
            <Container maxWidth='md' className='App'>
                {/* Title */}
                <Helmet>
                    <title>{createTitle("Homepage")}</title>
                </Helmet>

                {/* Menu */}
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        margin: '10px 0',
                    }}
                >
                    {/* Name */}
                    <Box
                        sx={{
                            display: 'inline',
                            textAlign: 'left',
                        }}
                    >
                        <Box
                            sx={{
                                fontSize: '24px',
                                fontWeight: 'bold',
                            }}
                        >
                            iosifache
                        </Box>
                        <Box
                            sx={{
                                fontSize: '12px',
                                fontWeight: 'light',
                                color: 'text.secondary',
                            }}
                        >
                            Iosif George-Andrei
                        </Box>
                    </Box>

                    {/* Navigation */}
                    <Box
                        sx={{
                            display: 'inline',
                            textAlign: 'right',
                        }}
                    >
                        <Tooltip title='Home' arrow>
                            <Home
                                sx={{
                                    marginRight: '10px',
                                    cursor: 'pointer',
                                }}
                            />
                        </Tooltip>
                        <Tooltip title='Curriculum Vitae' arrow>
                            <Badge
                                sx={{
                                    cursor: 'pointer',
                                }}
                            />
                        </Tooltip>
                    </Box>
                </Box>

                {/* Description */}
                <Box
                    sx={{
                        margin: '20px 0',
                    }}
                >
                    <Typography variant='h3'>Description</Typography>

                    {loremIpsum({ p: 1 }).map((text) => (
                        <Typography
                            variant='body1'
                            sx={{
                                textAlign: 'justify',
                                textWeight: 300,
                            }}
                        >
                            {text}
                        </Typography>
                    ))}
                </Box>

                {/* Articles */}
                <Box
                    sx={{
                        margin: '20px 0',
                    }}
                >
                    <Typography variant='h3'>Articles</Typography>

                    <TableContainer component={Paper}>
                        <Table size='small'>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Title</TableCell>
                                    <TableCell align='right'>
                                        Creation Time
                                    </TableCell>
                                    <TableCell align='right'>
                                        Language
                                    </TableCell>
                                    <TableCell align='right'>
                                        Minutes to Read
                                    </TableCell>
                                    <TableCell align='right'>Tags</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {library.map((article) => (
                                    <TableRow
                                        key={article.title}
                                        sx={{
                                            '&:last-child td, &:last-child th':
                                                { border: 0 },
                                        }}
                                    >
                                        <TableCell component='th' scope='row'>
                                            {article.title}
                                        </TableCell>
                                        <TableCell align='right'>
                                            {article.creation_time}
                                        </TableCell>
                                        <TableCell align='right'>
                                            {article.language}
                                        </TableCell>
                                        <TableCell align='right'>
                                            {article.minutes_to_read}
                                        </TableCell>
                                        <TableCell align='right'>
                                            {this.preformatTags(
                                                article.tags
                                            ).map((tag) => {
                                                return <Chip label={tag} />;
                                            })}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>

                {/* External links */}
                <Box
                    sx={{
                        margin: '20px 0',
                    }}
                >
                    <Typography variant='h3'>External Links</Typography>

                    <ul>
                        {Configuration.external_links.map((link) => (
                            <li>
                                <Link href={link.link} underline='none'>
                                    {link.caption}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </Box>
            </Container>
        );
    }
}

export default HomePage;
