


export const styles = StyleSheet.create({
  page: {
    padding: 30,
    // backgroundColor: COLORS.WHITE,
  },

  printDate: {
    alignSelf: 'flex-end',
    fontSize: 16,
    // color: COLORS.LIGHT_GRAY,
    marginBottom: 40,
  },
  companyName: {
    fontSize: 32,
    fontWeight: 600,
    textAlign: 'center',
    marginBottom: 5,
  },
  companyAddress: {
    fontSize: 20,
    // color: COLORS.LIGHT_GRAY,
    fontWeight: 400,
    textAlign: 'center',
    marginBottom: 5,
  },
  companyPhone: {
    fontSize: 20,
    // color: COLORS.LIGHT_GRAY,
    fontWeight: 400,
    marginBottom: 5,
    textAlign: 'center',
  },
  invoiceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 15,
    borderBottom: 1,
    // borderColor: COLORS.LIGHT_GRAY,
    paddingBottom: 10,
  },
  invoiceTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    // color: COLORS.RUSSIAN_BLACK,
  },
  invoiceMain: {
    padding: 10,
    borderRadius: 10,
    // border: `1px solid ${COLORS.BORDER_RED}`,
  },
  invoiceStatus: {
    fontSize: 17,
    // color: COLORS.DARK_RED,
  },
  customerDetails: {
    flexDirection: 'row',
    marginBottom: 20,
    flexWrap: 'wrap',
  },
  customerColumn: {
    flexDirection: 'column',
    flex: 1,
  },
  customerRow: {
    flexDirection: 'row',
    marginBottom: 10,
    width: 250,
  },
  customerLabel: {
    fontSize: 16,
    fontWeight: 600,
    // color: COLORS.LIGHT_GRAY,
    width: 120,
  },
  customerValue: {
    fontSize: 12,
    flex: 1,
    margin: 'auto 0',
    // color: COLORS.LIGHT_GRAY,
    fontWeight: 400,
    width: '100%',
  },
  servicesHeader: {
    fontSize: 24,
    fontWeight: 600,
    // color: COLORS.RUSSIAN_BLACK,
    marginBottom: 20,
    paddingBottom: 10,
    // borderBottom: `S1px solid ${COLORS.WHITE_SMOKE}`,
  },
  serviceItem: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  serviceImage: {
    width: 137,
    height: 80,
    borderRadius: 6,
    marginRight: 10,
  },
  serviceDetails: {
    flex: 1,
    marginBottom: 15,
  },
  serviceName: {
    fontSize: 24,
    marginBottom: 20,
    // color: COLORS.RUSSIAN_BLACK,
    fontWeight: 500,
  },
  serviceDuration: {
    fontSize: 18,
    // color: COLORS.LIGHT_GRAY,
    fontWeight: 400,
  },
  servicePrice: {
    fontSize: 20,
    // color: COLORS.RUSSIAN_BLACK,
    textAlign: 'right',
    fontWeight: 500,
    width: 150,
  },
  description: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 20,
    borderTopWidth: 1,
    // borderTopColor: COLORS.BORDER_GRAY,
    paddingTop: 10,
  },
  descriptionHeading: {
    fontSize: 18,
    // color: COLORS.RUSSIAN_BLACK,
    fontWeight: 600,
  },
  descriptionHeadingOutput: {
    fontSize: 16,
    // color: COLORS.LIGHT_GRAY,
    fontWeight: 400,
  },
  paymentDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    position: 'relative',
  },
  paymentColumn: {
    width: '48%',
  },
  paymentLabel: {
    fontSize: 24,
    // color: COLORS.RUSSIAN_BLACK,
    fontWeight: 'bold',
  },
  paymentItem: {
    fontSize: 18,
    // color: COLORS.RUSSIAN_BLACK,
    fontWeight: 500,
  },
  paymentValue: {
    fontSize: 18,
    fontWeight: 400,
    marginBottom: 5,
    textAlign: 'right',
  },
  stamp: {
    width: 70,
    height: 70,
    position: 'absolute',
    left: 50,
    top: 30,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
    textAlign: 'center',
    fontSize: 9,
    // color: COLORS.DIM_GRAY,
  },
  paymentSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  details: {
    flexDirection: 'row',
  },
});
