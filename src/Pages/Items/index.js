import React from "react";
import {ItemsContainer, ItemsH1,ItemsH2,ItemsP,ScrollingContainer,ItemImage,ItemDetailWrapper,ScrollingItem,ItemWrapper} from "./ItemsElements";


const Items = () => {
    return(
        <>
            <ItemsContainer>
                <ItemsH1>Items Page</ItemsH1>
                <ScrollingContainer>
                    <ScrollingItem>
                        <ItemWrapper>
                            <ItemImage>

                            </ItemImage>
                        </ItemWrapper>
                        <ItemWrapper>
                            <ItemDetailWrapper>
                                <ItemsH2>Nome Item 1</ItemsH2>
                                <ItemsP>Testo esplicativo dell'oggetto.</ItemsP>
                            </ItemDetailWrapper>
                        </ItemWrapper>
                    </ScrollingItem>
                    <ScrollingItem>
                        <ItemWrapper>
                            <ItemImage>

                            </ItemImage>
                        </ItemWrapper>
                        <ItemWrapper>
                            <ItemDetailWrapper>
                                <ItemsH2>Nome Item 2</ItemsH2>
                                <ItemsP>Testo esplicativo dell'oggetto.</ItemsP>
                            </ItemDetailWrapper>
                        </ItemWrapper>
                    </ScrollingItem>
                    <ScrollingItem>
                        <ItemWrapper>
                            <ItemImage>

                            </ItemImage>
                        </ItemWrapper>
                        <ItemWrapper>
                            <ItemDetailWrapper>
                                <ItemsH2>Nome Item 3</ItemsH2>
                                <ItemsP>Testo esplicativo dell'oggetto.</ItemsP>
                            </ItemDetailWrapper>
                        </ItemWrapper>
                    </ScrollingItem>
                </ScrollingContainer>
            </ItemsContainer>
        </>
    )

}

export default Items;