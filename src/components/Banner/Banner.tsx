import React from 'react';
import { IBanner } from '../../models/IBanner';
import { Button } from 'react-bootstrap';
import {
    StyleBannerLayout,
    StyleBannerTitle,
    StyleBannerUrl
} from '../Banner/Banner.styled';
import { Container, Row } from '../../common/StyleComponent'

const Banner: React.FC<IBanner> = ({imageUrl,currentUrl,title}) => {
    return <>
        <StyleBannerLayout url={imageUrl}>
            <Container>
                <Row>
                    <div className="col">
                        <StyleBannerTitle>{title}</StyleBannerTitle>
                        <StyleBannerUrl>{currentUrl}</StyleBannerUrl>
                    </div>
                </Row>
            </Container>
        </StyleBannerLayout>
    </>
}
export default Banner; 
