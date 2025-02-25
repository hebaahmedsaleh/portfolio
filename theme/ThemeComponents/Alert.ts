import { colors } from "@mui/material";
import type { Theme } from "@mui/material/styles";

export const Alert = {
  MuiAlert: {
    styleOverrides: {
      root: ({ theme }: { theme: Theme }) =>
        theme.unstable_sx({
          fontSize: "1rem",
        }),

      filledSuccess: ({ theme }: { theme: Theme }) =>
        theme.unstable_sx({
          color: "common.white",
          backgroundColor: "success.main",
        }),

      filledError: ({ theme }: { theme: Theme }) =>
        theme.unstable_sx({
          color: "common.white",
          backgroundColor: "error.main",
        }),

      filledInfo: ({ theme }: { theme: Theme }) =>
        theme.unstable_sx({
          color: "common.white",
          backgroundColor: "info.main",
        }),

      filledWarning: ({ theme }: { theme: Theme }) =>
        theme.unstable_sx({
          color: "common.white",
          backgroundColor: "warning.main",
        }),
    },
  },
};
