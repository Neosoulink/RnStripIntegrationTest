import React from 'react';
import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import { StripeProvider } from '@stripe/stripe-react-native';

const App = () => {
	return <StripeProvider
		publishableKey="pk_test_51Hzl5jCyrqJewPlXE3kCDtscnhVJLpcgQD6oqaB3tOh7GkBVh72OvQR7ygOfrP8bVAVBOKQ5EnJ59X3JB0NriG7300EFngOXPQ"
		urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
		merchantIdentifier="merchant.com.{{YOUR_APP_NAME}}" // required for Apple Pay
	>
		<SafeAreaView style={{}}>
			<StatusBar translucent={false} backgroundColor="transparent" />
			<ScrollView contentInsetAdjustmentBehavior="automatic" style={{}}>
				<View style={{}}>
					<Text>Text</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	</StripeProvider>;
};

export default App;
