import { IconSettings } from "@tabler/icons-react";
import { Button, ColorPicker, Drawer, IconButton, Text, useTheme, useUpdateTheme } from "stelios";
import React, { useState } from "react";
import styled from "styled-components";

import colors from "../../../../tokens/color/color-tokens.json";

const StyledDrawerChildren = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const StyledDrawerChildrenItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Settings = () => {
    const updateTheme=useUpdateTheme();
    const colorPalette=useTheme().theme.colorPalette;
    const [primaryColor, setPrimaryColor] = useState(colors.accent.primary);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [appearance, setAppearance] = useState(
        colorPalette.primary.appearance
    );

    const _handlePrimaryColorChange = (color) => {
        if (!color) return;
        setPrimaryColor(color);
        updateTheme({
          appearance,
          accents: {
            primary: color,
            black: colors.accent.black
          },
        });
      };

    const _onClickRevert = () => {
        setAppearance(colors.appearance);
        setPrimaryColor(colors.accent.primary);
        updateTheme({
          appearance: colors.appearance,
          accents: {
            primary: colors.accent.primary,
          },
        });
      };
    return (
        <>
        <IconButton color="primary" size="small" variant="neumorph" icon={<IconSettings />} alt="Settings" onClick={() => setDrawerOpen(true)}/>
        <Drawer size="small" color="primary" open={drawerOpen} onClose={() => setDrawerOpen(false)} hasCloseIcon title={<Text size="large" color="primary">Settings</Text>} position="right">
          <StyledDrawerChildren> 
          <StyledDrawerChildrenItem>
            <div style={{ marginTop: "1rem" }}>
              <ColorPicker
                size="medium"
                variant="soft"
                label="Website Color"
                color="primary"
                width="100%"
                onChange={_handlePrimaryColorChange}
              />
            </div>
          </StyledDrawerChildrenItem>
          <StyledDrawerChildrenItem
            className="revert-button"
            style={{ marginTop: "0.5rem" }}
          >
            <Button
              variant="contained"
              color="#AD2831"
              onClick={_onClickRevert}
            >
              Revert to Default Settings
            </Button>
          </StyledDrawerChildrenItem>
          {primaryColor}
        </StyledDrawerChildren>
        </Drawer>
        </>
    )
};

export default Settings;