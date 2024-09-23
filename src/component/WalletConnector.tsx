import { FC } from "react";
import {
	WalletDisconnectButton,
	WalletMultiButton,
	WalletModalProvider,
} from "@solana/wallet-adapter-react-ui";

require("@solana/wallet-adapter-react-ui/styles.css");

export const SolanaConnect: FC = () => {
	return (
		<WalletModalProvider>
			<WalletMultiButton />
			<WalletDisconnectButton />
		</WalletModalProvider>
	);
};
