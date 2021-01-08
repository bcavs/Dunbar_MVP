// SignUpScreen.js

import React from "react";
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	Button,
	Pressable,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { AntDesign } from "@expo/vector-icons";
import { Spacing, Typography, Colors } from "../../styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

import { login } from "../../helpers/authHelpers";
import CustomInput from "../../components/CustomInput";
import DunbarButton from "../../components/DunbarButton";

export default function LoginScreen(props) {
	const styles = StyleSheet.create({
		container: {
			flex: 1,
			justifyContent: "center",
			alignItems: "center",
			backgroundColor: "white",
		},
		textInput: {
			height: 40,
			width: "100%",
			// flex: 1,
			height: 45,
			// borderColor: "gray",
			// borderWidth: 1,
			// marginTop: 8,
			marginLeft: 5,
			fontSize: 16,
		},
		backButtonContainer: {
			height: 75,
			justifyContent: "center",
			alignItems: "flex-start",
			width: "100%",
		},
		inputContainer: {
			width: "100%",
			flexDirection: "row",
			justifyContent: "center",
			alignItems: "center",
			backgroundColor: "#fff",
			borderWidth: 0.5,
			// borderColor: "#fff",
			// height: 40,
			borderRadius: 5,
			marginTop: 10,
			paddingLeft: 25,
		},
	});

	const initialValues = {
		email: "",
		password: "",
	};

	return (
		<View style={[Spacing.global_horizontal_padding, styles.container]}>
			<View style={styles.backButtonContainer}>
				<Pressable onPress={() => props.navigation.goBack()}>
					<AntDesign name="left" size={32} color={Colors.gray3} />
				</Pressable>
			</View>
			<View
				style={{
					flex: 1,
					justifyContent: "flex-start",
					alignItems: "center",
					backgroundColor: "white",
					width: "100%",
				}}
			>
				<Text
					style={[
						Typography.heading,
						{
							textAlign: "left",
							alignSelf: "flex-start",
							marginBottom: 10,
						},
					]}
				>
					Welcome back
				</Text>
				<Text
					style={[
						Colors.text_darkgray,
						{
							textAlign: "left",
							alignSelf: "flex-start",
							fontSize: 16,
							fontWeight: "bold",
							marginBottom: 25,
						},
					]}
				>
					Log in to continue!
				</Text>
				<Formik
					initialValues={initialValues}
					validationSchema={loginValidationSchema}
					validateOnChange={false}
					onSubmit={(values) => {
						console.log("Logging in with: ", values)
						login(values.email, values.password);
					}}
				>
					{({
						values,
						handleChange,
						handleBlur,
						handleSubmit,
						isValid,
					}) => {
						return (
							<>
								<CustomInput
									leftIcon={
										<MaterialCommunityIcons
											name="email-outline"
											size={24}
											color={Colors.primary}
										/>
									}
									value={values.email}
									name="email"
									placeholder="Email"
									handleChange={handleChange("email")}
									handleBlur={handleBlur("email")}
									autoCapitalize="none"
								/>
								<CustomInput
									leftIcon={
										<EvilIcons
										name="lock"
										size={35}
										color={Colors.primary}
									/>
									}
									value={values.password}
									name="password"
									placeholder="Password"
									handleChange={handleChange("password")}
									handleBlur={handleBlur("password")}
									secureTextEntry
									autoCapitalize="none"
								/>
								{!isValid && <Text>We don't recognize that login :(</Text>}
								<View style={{
									flexDirection:"row",
								}}>
									<DunbarButton
										text="Forgot password?"
										onPress={() => console.log("forgot password")}
										buttonBorderColor="white"
									/>
									<DunbarButton
										text="Login"
										primary
										onPress={()=>handleSubmit()}
									/>
								</View>
							</>
						);
					}}
				</Formik>
			</View>
			<Pressable
				style={{ marginTop: 25, marginBottom: 14 }}
				onPress={() => props.navigation.navigate("SignUp")}
				>
				<Text>
					<Text>Don't have an account?</Text>{" "}
					<Text style={{ fontWeight: "bold" }}>Create one!</Text>
				</Text>
			</Pressable>
		</View>
	);
}

const loginValidationSchema = yup.object().shape({
	email: yup
		.string()
		.email("Please enter a valid email")
		.required("Email address is required"),
	password: yup
		.string()
		.min(6, ({ min }) => `Password must be at least ${min} characters`)
		.required("Password is required"),
});
