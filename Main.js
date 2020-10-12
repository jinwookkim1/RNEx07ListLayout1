import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class MainComponent extends Component{

    render(){

        // 앱을 개발하면서 가장 많은 제작 빈도를 가진 리스트 형태의 레이아웃 만들어보기
        // 우선 React Native에서 제공하는 ListView용 컴포넌트 사용없이 리스트형태 만들어보기

        //1. 실습에서 사용할 const변수 : JSX컴포넌트 객체를 변수에 저장 [ " "표시 하지 않음.. 문자열 아님 ]
        const aaa= <Text>Nice</Text>;

        //2. 실습에서 사용할 const변수 : 여러뷰를 가진 뷰를 저장 [ 당연히 스타일 줄수 있음. - 먼저 나오는지 확인한 후 ]
        const bbb= <View style= { {marginTop:16,} }>
                        <Text>Hello React Native</Text>
                        <Button title='button'></Button>
                   </View>;


        //5. 실습에서 사용할 배열 변수
        const arr= [ bbb, bbb, aaa ];
        //5.1 실습에서 사용할 배열 변수 [ 각 요소의 식별자 key속성값 사용 - 속성명 'key'는 고정된 props명 ]
        const arr2=[
            <View key="aa"><Text>aaa</Text></View>,
            <View key="bb"><Text>bbb</Text></View>,
            <View key="cc"><Text>ccc</Text></View>
        ];


        //6. 대량의 데이터 : 리스트에 보여줄 데이터 배열
        let datas= ["aaa","bbb","ccc","ddd"];

        return (

            //1. 변수에 JSX문법을 사용한 컴포넌트를 저장한 후 사용할 수 있음.
            // <View style={ style.container }>
            //     <Text style= { style.title }>List Layout test.</Text>
            //     {/* JSX안에서 JS변수를 사용하려면 {}안에 작성 */}
            //     { aaa }

            //     {/* 변수에 저장되어 있으므로 여러번 사용할 수 있음. */}
            //     { aaa }
            //     { aaa }
            //     { aaa } 
            // </View>

            //2. 변수에 하나의 컴포넌트가 아니라 여러개의 컴포넌트를 하나의 큰 View콘테이너에 넣어 사용할 수 있음.
            // <View style= {style.container}>
            //     <Text style= { style.title }>List Layout test.</Text>

            //     {/* 여러뷰를 가진 뷰를 변수에 넣고 사용하기 */}
            //     {bbb}
            //     {bbb}
            // </View>

            // 3. 함수(메소드)를 호출하여 JSX컴포넌트를 리턴하여 사용하기
            // <View style= {style.container}>
            //     <Text style= { style.title }>List Layout test.</Text>
                
            //     {/* 멤버메소드 호출 */}
            //     { this.showItemView() }
            //     { this.showItemView() }
            //     {/* 주의! 함수를 호출하는 문법이 아니면 경고 : 자식 컴포넌트로 함수를 사용할 수 없음. */}
            //     {/* { this.showItemView } */}
            // </View>

            // 4. 함수(메소드)를 호출할때 매개변수 전달하여 사용하기
            // <View style= {style.container}>
            //     <Text style= { style.title }>List Layout test.</Text>
                
            //     {/* 멤버메소드 호출 */}
            //     { this.showItemView2("sam", "first", "indigo") }
            //     { this.showItemView2("robin", "second", "orange") }
            // </View>

            //5. 배열변수에 JSX컴포넌트들을 요소로 넣어 사용하기.
            // <View style= {style.container}>
            //     <Text style= { style.title }>List Layout test.</Text>

            //     {/* 배열변수명을 작성하기만 하면 자동으로 안에 있는 요소들의 값(JSX컴포넌트)들이 출력됨 [key 속성이 없다고 경고가 보여짐] */}
            //     { arr }

            //     {/* 주의! 배열을 이용하여 안에 요소들의 컴포넌트를 보여줄때는 각 요소들을 구별하는 식별용 key속성을 해야함 */}
            //     {/* 5.1 key식별자 props를 사용한 배열 사용하기 */}
            //     { arr2 }
            // </View>

            //6. 위의 배열값 자동 출력형태를 이용한 실제 많이 사용하는 기법 실습하기
            // 배열에 데이터를 가지고 있는 것이 아니라 JSX를 저장하는 방식은 다소 좋은 코드로 보이지 않죠??            
            // 배열의 map()메소드 이용하기!! [forEach()도 배열요소값을 순회하나 리턴을 할 수 없음]
            <View style= {style.container}>
                <Text style= { style.title }>List Layout test.</Text>

                { 
                    // 배열의 개수만큼 반복하면서 배열로 리턴함(즉, 배열개수만큼 리턴하여 새로운 배열이 만들어짐)
                    datas.map( function(item, index, array) {
                        return (
                            // key속성이 없으면 경고문구 보여짐.. 배열요소들의 값을 구별하는 정해진 식별자 key props적용
                            <View key={ index } style={ style.itemView }>
                                <Text>{ item }</Text>
                            </View>
                        );
                    })
                    //단, 개수가 많아서 화면밖으로 나가도 자동으로 Scroll되지 않음. 리스트뷰가 아니므로.
                    // 스크롤이 되고 싶다면 스크롤뷰컴포넌트로 감싸야 함. 
                }
            </View>

            // 대량의 데이터가 단순 문자열이 아니라 객체들로서 item의 내용을 꾸밀 수 있음.
            // 이미지1, 텍스트2의 아이템뷰들을 만들어보기...
            // Ex08ListLayout2 를 이용하여 리스트형태의 레이아웃 실습해보기.. 
        );

    }//render method..

    //3.실습에서의 멤버메소드
    showItemView(){
        return (
            <View style= { {marginTop:16,} } >
                <Text>Nice world</Text>
                <Button title="press me"></Button>
            </View>
        );
    }

    //4.실습에서의 멤버메소드 [ 파라미터 전달받기 ]
    showItemView2(name, btnTitle, btnColor){
        return (
            <View style= { {marginTop:16,} } >
                <Text>Nice {name}</Text>
                <Button title={ btnTitle } color={ btnColor }></Button>
            </View>
        );
    }


}//MainComponent class...


// style 객체
const style= StyleSheet.create({
    container:{
        flex:1,
        padding:16,
    },
    title:{
        fontSize:24,
        fontWeight:'bold',       
    },


    // 6. 실습시에 사용할 아이템뷰의 스타일
    itemView:{
        padding:16,
        margin:8,
        borderWidth:1,
        borderRadius: 8,        
    }
});