import { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  header: {
    marginBottom: 20,
    textAlign: 'center',
  },
  organizationName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  address: {
    fontSize: 12,
    marginBottom: 5,
  },
  contact: {
    fontSize: 10,
    color: 'gray',
  },
  section: {
    marginBottom: 15,
    padding: 10,
    border: '1px solid #000',
  },
  receiptTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  footer: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 12,
  },
  disclaimer: {
    marginTop: 5,
    fontSize: 10,
    color: 'gray',
  },
});
