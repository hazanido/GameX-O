import React, {useState} from 'react';

import {StatusBar,ImageBackground, StyleSheet, Text, View,Image,Button,TouchableOpacity, Alert } from 'react-native';

export default function App() {
  
  const [count,setCount]=useState(0);
  
  //button 1
  const [imageSource, setImageSource] = useState(undefined);
  const [buttonVisible, setButtonVisible] = useState(true);
  //button 2
  const [imageSource1, setImageSource1] = useState(undefined);
  const [buttonVisible1, setButtonVisible1] = useState(true);
  //button 3
  const [imageSource2, setImageSource2] = useState(undefined);
  const [buttonVisible2, setButtonVisible2] = useState(true);
  //button 4
  const [imageSource3, setImageSource3] = useState(undefined);
  const [buttonVisible3, setButtonVisible3] = useState(true);
  //button 5
  const [imageSource4, setImageSource4] = useState(undefined);
  const [buttonVisible4, setButtonVisible4] = useState(true);
  //button 6
  const [imageSource5, setImageSource5] = useState(undefined);
  const [buttonVisible5, setButtonVisible5] = useState(true);
  //button 7
  const [imageSource6, setImageSource6] = useState(undefined);
  const [buttonVisible6, setButtonVisible6] = useState(true);
  //button 8
  const [imageSource7, setImageSource7] = useState(undefined);
  const [buttonVisible7, setButtonVisible7] = useState(true);
  //button 9
  const [imageSource8, setImageSource8] = useState(undefined);
  const [buttonVisible8, setButtonVisible8] = useState(true);


  const checkVictory = () => {
    const images = [
      imageSource,
      imageSource1,
      imageSource2,
      imageSource3,
      imageSource4,
      imageSource5,
      imageSource6,
      imageSource7,
      imageSource8
    ];
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const line of lines) {
      const [a, b, c] = line;
      if (images[a] && images[a] === images[b] && images[a] === images[c]) {
        return true;
      }
    }
    return false;
  };


const gameReset=()=>{
  const functionsArray = [
    setButtonVisible,
    setButtonVisible1,
    setButtonVisible2,
    setButtonVisible3,
    setButtonVisible4,
    setButtonVisible5,
    setButtonVisible6,
    setButtonVisible7,
    setButtonVisible8
  ];
  const imageSourceArray = [
    setImageSource,
    setImageSource1,
    setImageSource2,
    setImageSource3,
    setImageSource4,
    setImageSource5,
    setImageSource6,
    setImageSource7,
    setImageSource8
  ];
  
  for (let index = 0; index  < functionsArray.length; index++) {
    functionsArray[index](true);
    imageSourceArray[index](undefined);
  };
  setCount(0);
}
const marked= (id: number) => {
  let updatedCount = count + 1; 
  setCount(updatedCount);
  if(id==0){
    if(count == 0||count ==2||count ==4||count ==6||count ==8){
      setImageSource(require('./assets/x.png'));
      setButtonVisible(false);

      
    }else if(count == 1||count ==3||count ==5||count ==7||count ==9){
      setImageSource(require('./assets/O.png'));
      setButtonVisible(false);

    }
  }else if(id==1){
    if(count == 0||count ==2||count ==4||count ==6||count ==8){
      setImageSource1(require('./assets/x.png'));
      setButtonVisible1(false);

    }else if(count == 1||count ==3||count ==5||count ==7||count ==9){
      setImageSource1(require('./assets/O.png'));
      setButtonVisible1(false);

    }
  }else if(id==2){
    if(count == 0||count ==2||count ==4||count ==6||count ==8){
      setImageSource2(require('./assets/x.png'));
      setButtonVisible2(false);

    }else if(count == 1||count ==3||count ==5||count ==7||count ==9){
      setImageSource2(require('./assets/O.png'));
      setButtonVisible2(false);

    }
}else if(id==3){
  if(count == 0||count ==2||count ==4||count ==6||count ==8){
    setImageSource3(require('./assets/x.png'));
    setButtonVisible3(false);

  }else if(count == 1||count ==3||count ==5||count ==7||count ==9){
    setImageSource3(require('./assets/O.png'));
    setButtonVisible3(false);

  }
}else if(id==4){
  if(count == 0||count ==2||count ==4||count ==6||count ==8){
    setImageSource4(require('./assets/x.png'));
    setButtonVisible4(false);

  }else if(count == 1||count ==3||count ==5||count ==7||count ==9){
    setImageSource4(require('./assets/O.png'));
    setButtonVisible4(false);

  }
}else if(id==5){
  if(count == 0||count ==2||count ==4||count ==6||count ==8){
    setImageSource5(require('./assets/x.png'));
    setButtonVisible5(false);

  }else if(count == 1||count ==3||count ==5||count ==7||count ==9){
    setImageSource5(require('./assets/O.png'));
    setButtonVisible5(false);

  }
}else if(id==6){
  if(count == 0||count ==2||count ==4||count ==6||count ==8){
    setImageSource6(require('./assets/x.png'));
    setButtonVisible6(false);

  }else if(count == 1||count ==3||count ==5||count ==7||count ==9){
    setImageSource6(require('./assets/O.png'));
    setButtonVisible6(false);

  }
}else if(id==7){
  if(count == 0||count ==2||count ==4||count ==6||count ==8){
    setImageSource7(require('./assets/x.png'));
    setButtonVisible7(false);

  }else if(count == 1||count ==3||count ==5||count ==7||count ==9){
    setImageSource7(require('./assets/O.png'));
    setButtonVisible7(false);

  }
}else if(id==8){
  if(count == 0||count ==2||count ==4||count ==6||count ==8){
    setImageSource8(require('./assets/x.png'));
    setButtonVisible8(false);
 

    
  }else if(count == 1||count ==3||count ==5||count ==7||count ==9){
    setImageSource8(require('./assets/O.png'));
    setButtonVisible8(false);

  }
}
let isVictory = false
if (checkVictory()) {
  isVictory = true;
  const winner = updatedCount % 2 === 0 ? 'Player 1' : 'Player 2';
  gameReset();
  
  Alert.alert(`${winner} the winner`);
} else if (updatedCount === 9 && !isVictory) {
  Alert.alert('Tie try again');
  gameReset();
  
}


}

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} resizeMode="cover" source={require("./assets/backgroundX-O.jpg")} >
      <View style={styles.bord}>
      
      {buttonVisible ? (//button 0
        <TouchableOpacity style={styles.button} onPress={ ()=> marked(0)}>

        </TouchableOpacity>
      ) : (
        <Image source={imageSource} style={styles.button} />
      )}
 
      {buttonVisible1 ? (//button 1
        <TouchableOpacity style={styles.button} onPress={()=> marked(1)}>
        </TouchableOpacity>
      ) : (
        <Image source={imageSource1} style={styles.button} />
      )}

      {buttonVisible2 ? (//button 2
        <TouchableOpacity style={styles.button} onPress={()=> marked(2)}>
        </TouchableOpacity>
      ) : (
        <Image source={imageSource2} style={styles.button} />
      )}

      {buttonVisible3 ? (//button 3
        <TouchableOpacity style={styles.button} onPress={()=> marked(3)}>
        </TouchableOpacity>
      ) : (
        <Image source={imageSource3} style={styles.button} />
      )}
      {buttonVisible4 ? (//button 4
        <TouchableOpacity style={styles.button} onPress={()=> marked(4)}>
        </TouchableOpacity>
      ) : (
        <Image source={imageSource4} style={styles.button} />
      )}
      {buttonVisible5 ? (//button 5
        <TouchableOpacity style={styles.button} onPress={()=> marked(5)}>
        </TouchableOpacity>
      ) : (
        <Image source={imageSource5} style={styles.button} />
      )}

      {buttonVisible6 ? (//button 6
        <TouchableOpacity style={styles.button} onPress={()=> marked(6)}>
        </TouchableOpacity>
      ) : (
        <Image source={imageSource6} style={styles.button} />
      )}
      {buttonVisible7 ? (//button 7
        <TouchableOpacity style={styles.button} onPress={()=> marked(7)}>
        </TouchableOpacity>
      ) : (
        <Image source={imageSource7} style={styles.button} />
      )}
      {buttonVisible8 ? (//button 8
        <TouchableOpacity style={styles.button} onPress={()=> marked(8)}>
        </TouchableOpacity>
      ) : (
        <Image source={imageSource8} style={styles.button} />
      )}
</View>
<Text style = {styles.titleText} >Tic Tac Toe</Text>

<View style={styles.countContainer}>
      <Text style = {styles.titleText2} >Turn: {count % 2 === 0 ? 'Player 1' : 'Player 2'}</Text>
</View>

<View style={styles.fixToText}>

    <Button
  title="Rules of the Game"
  onPress={() => Alert.alert(
    'Rules of the Game',
    'The first player (X) places his token somewhere on the board. ' +
    'The other player then places their mark and repeats until one of the players forms a sequence of three of their symbols in one row, one column or one diagonal and thus wins or until the entire board is filled and neither player was able to form a sequence, in which case the result of the game is draw.'
  )}/>
        <Button
          title="Game reset"
          onPress={gameReset}
        />
  </View>
    </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width:400,
    height:400,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    marginBottom: 50,
  },
  bord: {
    flex: 1,
    margin: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    width: 100,
    height: 100,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    flex: 1,
    alignItems: 'center',
    margin: -150,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
    
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  titleText2: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
