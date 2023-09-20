import { Dimensions } from 'react-native'

let ScreenHeight = Dimensions.get("window").height;
//use - height: ScreenHeight

const styles = {
    logoStyle: {
        height: 42,
        width: 42,
        marginRight:"10%",
        marginLeft:"-5%"
    },
    
    loginlogo: {
        height: 200,
        width:200,
        justifyContent:"center",        
    },
    
    drawerStyle:{
        height : 30,
        width: 30
    },
    container: {
        marginTop: 10,
        marginTop: 16,
        marginLeft: 10,
        paddingVertical: 8,
        textAlign: 'center',
        fontSize: 70,
        fontStyle: "Times New Roman",
        fontWeight: 'bold',
    },
    theBestText:{
        color:"black", 
        fontSize:15,
        width:240
    },
    removeText:{
         color:"red",
    },
    containerCenter: {
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15,
        paddingVertical: 8,
        textAlign: 'center',
        fontSize: 70,
        fontStyle: "Times New Roman",
        fontWeight: 'bold'
        
    },
    containerCenter2: {
        
        // paddingVertical: 175,
        textAlign: 'center',
        fontSize: 70,
        fontStyle: "Times New Roman",
        fontWeight: 'bold',
        backgroundColor:"white",
        
        // borderWidth:1,
        // borderColor:"black",
    //    paddingBottom:"10%"
    height: ScreenHeight

        
    },
    textContainer: {
        color: '#57595B',
        fontSize: 15,
        fontWeight: 'bold'
    },
    textWithMargin: {
        color: '#57595B',
        fontSize: 15,
        fontWeight: 'bold',
        alignItems: 'center',
        margin: 10
    },
    roomText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#57595B',
        margin: 2,
        marginLeft: 2,
        marginBottom:10
    },
    centerScreen: {
        marginTop: 300,
        fontStyle: 'italic',
        alignItems: 'center',
        color: '#57595B'
    },
    centerRow:{
        alignItems: 'center',
    },
    headingText: {
        color: '#2B3942',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom:1
    },
    paragraphText: {
        color: '#57595B',
        fontSize: 12.5,
    },
    greenText: {
        color: 'darkgreen'
    },
    containerBox: {
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 10,
        shadowColor: '#57595B',
        margin: 10,
        marginTop: 4,
        marginBottom: 4,
        paddingTop: 15,
        paddingBottom: 15,
        shadowOffset: { width: 0, height: 4 },
        elevation: 2,
    },
    
    groupMemberListBox: {
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 10,
        shadowColor: '#57595B',
        margin: 2,
        marginTop: 4,
        marginBottom: 4,
        
        
    },
    greenButton:{
        backgroundColor:'green',
        color: 'white',
        fontWeight:'bold',
        alignItems:'center',
        borderRadius: 5,
        padding: 10,
        shadowColor: '#57595B',
        margin: 10,
        marginTop: 4,
        marginBottom: 4,
        paddingTop: 15,
        paddingBottom: 15,
        shadowOffset: { width: 0, height: 4 },
        elevation: 2,
    },
    smallButtons:{
        backgroundColor:'orange',
        color: 'white',
        fontWeight:'bold',
        alignItems:'center',
        borderRadius: 5,
        padding: 10,
        shadowColor: '#57595B',
        marginTop: 10,
        marginBottom: 4,
        padding:20,
        marginHorizontal:5,
        paddingTop: 15,
        paddingBottom: 15,
        shadowOffset: { width: 0, height: 4 },
        elevation: 2,
    },
    wideGreenButton:{
        backgroundColor:'green',
        color: 'white',
        fontWeight:'bold',
        alignItems:'center',
        borderRadius: 5,
        padding: 10,
        width:301,
        shadowColor: '#57595B',
        margin: 10,
        marginTop: 4,
        marginBottom: 4,
        paddingTop: 15,
        paddingBottom: 15,
        shadowOffset: { width: 0, height: 4 },
        elevation: 2,
    },
    wideContainerBox:{
        backgroundColor: 'lightblue',
        borderRadius: 5,
        padding: 10,
        width:300,
        shadowColor: '#57595B',
        margin: 12,
        marginTop: 20,
        marginBottom: 4,
        paddingTop: 15,
        paddingBottom: 15,
        shadowOffset: { width: 0, height: 4 },
        elevation: 2,
    },
    smallContainerBox: {
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 10,
        margin: 2,
        marginTop: 7,
        marginBottom: 2,
        paddingTop: 10,
        paddingBottom: 10,
        shadowColor: '#57595B',
        shadowOffset: { width: 0, height: 4 },
        elevation: 2,
    },
    whiteBackground: {
        backgroundColor: 'white'
    },
    grayBackground: {
        backgroundColor: 'cyan'
    },
    search: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 7,
        marginTop: 10,
        backgroundColor: 'white'
    },
    searchContainer:{
        flex:1,
        flexDirection:'row'
    },
    searchRoomContainer:{
        marginVertical:20,
        width:400
    },
    searchLogoStyle: {
        height: 35,
        width: 35,
        // marginRight:"4%",

    },
    searchRoom: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 7,
        width:"88%",
        backgroundColor: 'white',
        
        // borderColor:"black"
    },
    rowContainerSimple:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical:10,
        // borderWidth:1,
        paddingHorizontal:"7%",
        // borderColor:"black"
      },
    theBetterSearchBar:{
    margin:10,
    },
    colorSearchBar:{
        margin:10,
        borderColor:'white',
        borderBottomWidth:2
    },
    searchScroll:{
       marginHorizontal:15,
       marginVertical:0,
       borderRadius: 5,
       backgroundColor: '#fffafa'
    },
    item:{
        // borderWidth:1,
        // borderColor: '#ccc',
        borderBottomColor: `#f5f5f5`,
        borderBottomWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,  
    },
    dropdown:{
        color: "#bb233d"
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        
      },
      sideDrawBackground: {
        marginLeft:"35%",
        // marginBottom:"140%",
        // marginTop:"13%",
        marginLeft:"50%",
        height: ScreenHeight,
        borderWidth:1,
        borderColor:"black"
      },
      sideDrawContainer: {
        flex: 1,
        justifyContent: 'center',
        // marginLeft: "10%",
        marginRight: "-20%",
        marginTop:" -15%",
        shadowColor: 'black',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation:20,
        borderWidth:1,
        borderColor:"blue"
        
        
      },
      modalContent: {
        backgroundColor: '#ffffff',
        paddingTop: 20,
        paddingLeft:10,
        borderRadius: 5,
        height:"325%",
        // marginTop:"229%",
        // marginRight:"12%",
        // marginLeft:"20%",
        borderWidth:1,
        borderColor:"red"
        
      },
      payupModalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      payupModalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10, 
        alignItems: 'center',
      },
      modalCenter:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    greenContainerBox:{
        backgroundColor: '#87cefa',
        color:'white',
        borderRadius: 5,
        padding: 30,
        margin: 2,
        marginTop: 7,
        marginBottom: 2,
        paddingTop: 10,
        paddingBottom: 10,
        shadowColor: '#57595B',
        shadowOffset: { width: 0, height: 4 },
        elevation: 2,
    },
    blueContainerBox:{
        backgroundColor: '#87cefa',
        color:'white',
        borderRadius: 5,
        padding: 40,
        margin: 2,
        marginTop: 7,
        marginBottom: 2,
        paddingTop: 10,
        paddingBottom: 10,
        shadowColor: '#57595B',
        shadowOffset: { width: 0, height: 4 },
        elevation: 2,
    },
    table:{
        marginTop:10,
    },
    centeredText:{
        justifyContent:'center'
    },
    lightButton:{
        backgroundColor:'#93f1fa',
        color: 'white',
        fontWeight:'bold',
        alignItems:'center',
        borderRadius: 5,
        padding: 10,
        shadowColor: '#57595B',
        margin: 10,
        marginTop: 4,
        marginBottom: 4,
        paddingTop: 15,
        paddingBottom: 15,
        shadowOffset: { width: 0, height: 4 },
        elevation: 2,
    },
    whiteContainer:{
        backgroundColor:'white'
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight:20,
        borderBottomWidth: 1,
        borderColor: '#f0f0f0',
        paddingVertical: 8,
      },
      
      row: {
        flex: 1,
      },
      cellText: {
        fontSize: 14,
      },
      payGreenButton: {
        backgroundColor: '#8b0000', // Change to your desired button style
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 5,
      },
      ackBlueButton: {
        backgroundColor: '#8b0000', // Change to your desired button style
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 5,
        
    
      },
      extraButton: {
        backgroundColor:'#000080',
        color: 'black',
        fontWeight:'bold',
        alignItems:'center',
        borderRadius: 5,
        padding: 10,
        shadowColor: '#57595B',
        margin: 10,
        marginTop: 4,
        marginBottom: 4,
        paddingTop: 15,
        paddingBottom: 15,
        shadowOffset: { width: 0, height: 4 },
        elevation: 2,
      },
      breakSpace:{
        margin:20
      },
      breakSpace2:{
        margin:10
      },
      leftText:{
        color:"black", 
        fontSize:15,
      },
      buttonText: {
        color: 'white',
        fontWeight: 'bold',
      },
      headingText_History: {
        color: '#000080',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom:1,
        textAlign: 'center'
    },
    container_History: {
        marginTop: 10,
        marginTop: 16,
        paddingVertical: 8,
        textAlign: 'center',
        alignItems: 'center',
        fontSize: 70,
        fontStyle: "Times New Roman",
        fontWeight: 'bold',

    },
    inputbox :{
        
        borderRadius: 5,
        padding: 10,
        borderColor: "#c0c0c0",
        marginVertical:5,
        marginBottom:15,
        shadowColor: '#c0c0c0',
        shadowOffset: { width: 0, height: 3 },
        elevation: 1,
        
        
    }

    

}

module.exports = styles;