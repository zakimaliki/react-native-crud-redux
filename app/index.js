import { Link } from "expo-router";
import { Text, View } from "react-native";
import styles from "../app/style"

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
        <Link href="/detail/1">Go to Detail</Link>
        <Link href="/list">Go to List</Link>
        <Link href="/profile?name=Zaki&age=28">Zaki's Profile</Link>
      </View>
    </View>
  );
}
