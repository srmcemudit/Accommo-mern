import { Page, Text, View, Document, PDFViewer } from '@react-pdf/renderer';
import { styles } from './PdfStyles';

export default function PdfInvoice() {
  const PDF = () => (
    <Document>
    <Page size="A4" style={styles.page}>

        <View style={styles.header}>
            <Text style={styles.organizationName}>Accommo Corporation</Text>
            <Text style={styles.address}>123 Main Street, Springfield, Lucknow</Text>
            <Text style={styles.contact}>Email: info@accommo.com | Phone: +91 9874561230</Text>
        </View>

        <View style={styles.section}>
            <Text style={styles.receiptTitle}>Payment Receipt</Text>
            <Text>Date: 2024-12-20</Text>
            <Text>Receipt No: #INV-001234</Text>
        </View>

        <View style={styles.section}>
            <Text style={styles.subTitle}>Customer Details</Text>
            <Text>Name: abc </Text>
            <Text>Address: 123 Era Street, lucknow</Text>
            <Text>Contact: +91 9874102356</Text>
        </View>
        <View style={styles.section}>
            <Text style={styles.subTitle}>Payment Details</Text>
            <Text>Amount Paid: 15000.00</Text>
            <Text>Payment Method: Credit Card</Text>
            <Text>Transaction ID: TXN789456123</Text>
        </View>

        <View style={styles.footer}>
            <Text>Thank you for your payment!</Text>
            <Text style={styles.disclaimer}>
            This is a system-generated receipt and does not require a signature.
            </Text>
        </View>
    </Page>

    </Document>
  );

  return (
    <div className="w-full h-[697px]">
      <PDFViewer width="100%" height="100%">
        <PDF />
      </PDFViewer>
    </div>
  );
}
