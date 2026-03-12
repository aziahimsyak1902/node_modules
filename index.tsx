/* eslint-disable @typescript-eslint/no-require-imports */
import { View, Text, Image, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* SECTION FOTO */} 
      <Image 
       source={require('../../assets/images/Aziii.jpeg')}

        style={styles.profilePic} 
      />

      {/* SECTION IDENTITAS */}
      <Text style={styles.name}>Azi Ahimsyak</Text>
      <Text style={styles.nim}>NIM : 243303621216</Text>
      <Text style={styles.Jurusan}>Jurusan : Sistem Informasi</Text>

      {/* SECTION BIO */}
      <View style={styles.bioCard}>
        <Text style={styles.bioText}>
          🚀 Cape itu wajar ,nyerah itu pilihan
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#322727',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 100, // Bikin jadi bulat
    borderWidth: 3,
    borderColor: '#ffff99',
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: '900',
    color: '#fff',
    marginBottom: 5,
  },
  nim: {
    fontSize: 14,
    color: '#ffff99',
    marginBottom: 20,
    letterSpacing: 2,

  },
  Jurusan: {
    fontSize: 14,
    color: '#ffff99',
    marginBottom: 20,
    letterSpacing: 2,
  },
  bioCard: {
    backgroundColor: '#111',
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#333',
    width: '100%',
  },
  bioText: {
    color: '#ccc',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});
