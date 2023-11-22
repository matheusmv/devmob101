import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  header: {
    width: '100%',
    height: 300,
    backgroundColor: '#aaa',
    paddingTop: '10%',
    borderBottomLeftRadius: 42,
    borderBottomRightRadius: 42,
    marginBottom: 24,
  },
  img: {
    width: '100%',
    height: 300,
    borderBottomLeftRadius: 42,
    borderBottomRightRadius: 42,
    objectFit: 'contain',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
  },
  buttomHeader: {
    backgroundColor: '#fff',
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  body: {
    marginHorizontal: 24,
  },
  nameProduct: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  rowBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  rate: {
    color: 'rgba(0,0,0,0.5)',
  },
  rowIncraseBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    alignItems: 'center',
  },
  valueIncrase: {
    fontWeight: 'bold',
    fontSize: 18,
    minWidth: 25,
    textAlign: 'center',
  },
  btnIncrase: {
    borderRadius: 20,
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 24,
  },
  titleSubSection: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
  },
  description: {
    textAlign: 'justify',
    color: 'rgba(0,0,0,0.5)',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.1)',
  },
  titlePrice: {
    color: 'rgba(0,0,0,0.5)',
    fontSize: 14,
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  btnCard: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    height: 51.5,
  },
  btnCardText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
  },
});
