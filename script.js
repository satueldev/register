let menucontent = document.getElementById('menu-conten')
let open = document.getElementById('menu')
let close = document.getElementById('close')
let f_name = document.getElementById('firstname')
let m_name = document.getElementById('middlename')
let l_name = document.getElementById('lastname')
let number = document.getElementById('phone')
let date_of_birth = document.getElementById('dob')
let add = document.getElementById('address')
let previous_school = document.getElementById('p-school')
let res = document.getElementById('result')
let container = document.getElementById('info-space')
let header = document.getElementById('reg-header')
let img1 = document.getElementById('pic1')
let img2 = document.getElementById('pic2')
let img3 = document.getElementById('pic3')
let img4 = document.getElementById('pic4')
let img5 = document.getElementById('pic5')
let img6 = document.getElementById('pic6')
let img7 = document.getElementById('pic7')
let img8 = document.getElementById('pic8')
let img9 = document.getElementById('pic9')
let img10 = document.getElementById('pic10')
let img11 = document.getElementById('pic11')
let img12 = document.getElementById('pic12')
function openmenu(){
    document.getElementById('close').style.display = 'block'
    document.getElementById('menu').style.opacity ='0'
    document.getElementById('menu-conten').style.marginLeft ='-10px'
    

}
function closemenu() {
    document.getElementById('menu').style.opacity ='1'
    document.getElementById('close').style.display = 'none'
    document.getElementById('menu-conten').style.marginLeft ='-180px'
}
function submitform(){
   console.log('FIRST NAME:' + ' ' + document.getElementById('firstname').value)
   console.log('MIDDLE NAME:' + ' ' + document.getElementById('middlename').value)
   console.log('LAST NAME:' + ' ' + document.getElementById('lastname').value)
   console.log('PHONE NUMBER:' + ' ' + document.getElementById('phone').value)
   console.log('D.O.B:' + ' ' + document.getElementById('dob').value)
   console.log('ADDRESS:' + ' ' + document.getElementById('address').value)
   console.log('PREVIOUS SCHOOL:' + ' ' + document.getElementById('p-school').value)   


          if (document.getElementById('firstname').value == '' || document.getElementById('middlename').value == '' || document.getElementById('lastname').value == '' 
          || document.getElementById('phone').value == '' || document.getElementById('dob').value == '' || document.getElementById('address').value == ''
          || document.getElementById('p-school').value == '') {
            document.getElementById('result').style.display = 'none'
            alert('please fill in all the required fields before proceeding!')
          } else {
            document.getElementById('result').style.display = 'block'
            document.getElementById('info-space').style.display = 'none'
            document.getElementById('reg-header').style.opacity = '0'
            if (document.getElementById('info-space').style.display = 'none') {
              document.getElementById('result').style.marginTop = '90px'
            }
          }
         
}
/*function returnpage(){
    document.getElementById('result').style.display = 'none'
    document.getElementById('info-space').style.display = 'block'

    document.getElementById('reg-header').style.opacity = '1'
}*/
function showfullimagepic1(){
     document.getElementById('pic1').style.height = '300px'
     document.getElementById('pic1').style.width = '300px'
      document.getElementById('pic1').style.marginLeft = '20px'
     document.getElementById('pic2').style.display = 'none'
     document.getElementById('pic3').style.display = 'none'
     document.getElementById('pic4').style.display = 'none'
     document.getElementById('pic5').style.display = 'none'
     document.getElementById('pic6').style.display = 'none'
     document.getElementById('pic7').style.display = 'none'
     document.getElementById('pic8').style.display = 'none'
     document.getElementById('pic9').style.display = 'none'
     document.getElementById('pic10').style.display = 'none'
     document.getElementById('pic11').style.display = 'none'
     document.getElementById('pic12').style.display = 'none'
    }
    function returntonormalpic1(){
        document.getElementById('pic1').style.height = '150px'
        document.getElementById('pic1').style.width = '150px'
        document.getElementById('pic1').style.marginLeft = '5px'
        document.getElementById('pic2').style.display = 'inline-block'
        document.getElementById('pic3').style.display = 'inline-block'
        document.getElementById('pic4').style.display = 'inline-block'
        document.getElementById('pic5').style.display = 'inline-block'
        document.getElementById('pic6').style.display = 'inline-block'
        document.getElementById('pic7').style.display = 'inline-block'
        document.getElementById('pic8').style.display = 'inline-block'
        document.getElementById('pic9').style.display = 'inline-block'
        document.getElementById('pic10').style.display = 'inline-block'
        document.getElementById('pic11').style.display = 'inline-block'
        document.getElementById('pic12').style.display = 'inline-block'
    }

    function showfullimagepic2(){
        document.getElementById('pic2').style.height = '300px'
        document.getElementById('pic2').style.width = '300px'
         document.getElementById('pic2').style.marginLeft = '20px'
        document.getElementById('pic1').style.display = 'none'
        document.getElementById('pic3').style.display = 'none'
        document.getElementById('pic4').style.display = 'none'
        document.getElementById('pic5').style.display = 'none'
        document.getElementById('pic6').style.display = 'none'
        document.getElementById('pic7').style.display = 'none'
        document.getElementById('pic8').style.display = 'none'
        document.getElementById('pic9').style.display = 'none'
        document.getElementById('pic10').style.display = 'none'
        document.getElementById('pic11').style.display = 'none'
        document.getElementById('pic12').style.display = 'none'
       }
       function returntonormalpic2(){
           document.getElementById('pic2').style.height = '150px'
           document.getElementById('pic2').style.width = '150px'
           document.getElementById('pic2').style.marginLeft = '5px'
           document.getElementById('pic1').style.display = 'inline-block'
           document.getElementById('pic3').style.display = 'inline-block'
           document.getElementById('pic4').style.display = 'inline-block'
           document.getElementById('pic5').style.display = 'inline-block'
           document.getElementById('pic6').style.display = 'inline-block'
           document.getElementById('pic7').style.display = 'inline-block'
           document.getElementById('pic8').style.display = 'inline-block'
           document.getElementById('pic9').style.display = 'inline-block'
           document.getElementById('pic10').style.display = 'inline-block'
           document.getElementById('pic11').style.display = 'inline-block'
           document.getElementById('pic12').style.display = 'inline-block'
       }

       function showfullimagepic3(){
        document.getElementById('pic3').style.height = '300px'
        document.getElementById('pic3').style.width = '300px'
         document.getElementById('pic3').style.marginLeft = '20px'
         document.getElementById('pic3').style.marginTop = '90px'
        document.getElementById('pic1').style.display = 'none'
        document.getElementById('pic2').style.display = 'none'
        document.getElementById('pic4').style.display = 'none'
        document.getElementById('pic5').style.display = 'none'
        document.getElementById('pic6').style.display = 'none'
        document.getElementById('pic7').style.display = 'none'
        document.getElementById('pic8').style.display = 'none'
        document.getElementById('pic9').style.display = 'none'
        document.getElementById('pic10').style.display = 'none'
        document.getElementById('pic11').style.display = 'none'
        document.getElementById('pic12').style.display = 'none'
       }
       function returntonormalpic3(){
           document.getElementById('pic3').style.height = '150px'
           document.getElementById('pic3').style.width = '290px'
           document.getElementById('pic3').style.marginLeft = '30px'
           document.getElementById('pic3').style.marginTop = '10px'
           document.getElementById('pic1').style.display = 'inline-block'
           document.getElementById('pic2').style.display = 'inline-block'
           document.getElementById('pic4').style.display = 'inline-block'
           document.getElementById('pic5').style.display = 'inline-block'
           document.getElementById('pic6').style.display = 'inline-block'
           document.getElementById('pic7').style.display = 'inline-block'
           document.getElementById('pic8').style.display = 'inline-block'
           document.getElementById('pic9').style.display = 'inline-block'
           document.getElementById('pic10').style.display = 'inline-block'
           document.getElementById('pic11').style.display = 'inline-block'
           document.getElementById('pic12').style.display = 'inline-block'
       }

       function showfullimagepic4(){
        document.getElementById('pic4').style.height = '300px'
        document.getElementById('pic4').style.width = '300px'
         document.getElementById('pic4').style.marginLeft = '20px'
        document.getElementById('pic1').style.display = 'none'
        document.getElementById('pic2').style.display = 'none'
        document.getElementById('pic3').style.display = 'none'
        document.getElementById('pic5').style.display = 'none'
        document.getElementById('pic6').style.display = 'none'
        document.getElementById('pic7').style.display = 'none'
        document.getElementById('pic8').style.display = 'none'
        document.getElementById('pic9').style.display = 'none'
        document.getElementById('pic10').style.display = 'none'
        document.getElementById('pic11').style.display = 'none'
        document.getElementById('pic12').style.display = 'none'
       }
       function returntonormalpic4(){
           document.getElementById('pic4').style.height = '150px'
           document.getElementById('pic4').style.width = '150px'
           document.getElementById('pic4').style.marginLeft = '5px'
           document.getElementById('pic1').style.display = 'inline-block'
           document.getElementById('pic3').style.display = 'inline-block'
       }

       function showfullimagepic5(){
        document.getElementById('pic5').style.height = '300px'
        document.getElementById('pic5').style.width = '300px'
         document.getElementById('pic5').style.marginLeft = '20px'
        document.getElementById('pic1').style.display = 'none'
        document.getElementById('pic3').style.display = 'none'
        document.getElementById('pic1').style.display = 'none'
        document.getElementById('pic2').style.display = 'none'
        document.getElementById('pic3').style.display = 'none'
        document.getElementById('pic4').style.display = 'none'
        document.getElementById('pic6').style.display = 'none'
        document.getElementById('pic7').style.display = 'none'
        document.getElementById('pic8').style.display = 'none'
        document.getElementById('pic9').style.display = 'none'
        document.getElementById('pic10').style.display = 'none'
        document.getElementById('pic11').style.display = 'none'
        document.getElementById('pic12').style.display = 'none'
       }
       function returntonormalpic5(){
           document.getElementById('pic5').style.height = '150px'
           document.getElementById('pic5').style.width = '150px'
           document.getElementById('pic5').style.marginLeft = '5px'
           document.getElementById('pic1').style.display = 'inline-block'
           document.getElementById('pic2').style.display = 'inline-block'
           document.getElementById('pic3').style.display = 'inline-block'
           document.getElementById('pic4').style.display = 'inline-block'
           document.getElementById('pic5').style.display = 'inline-block'
           document.getElementById('pic6').style.display = 'inline-block'
           document.getElementById('pic7').style.display = 'inline-block'
           document.getElementById('pic8').style.display = 'inline-block'
           document.getElementById('pic9').style.display = 'inline-block'
           document.getElementById('pic10').style.display = 'inline-block'
           document.getElementById('pic11').style.display = 'inline-block'
           document.getElementById('pic12').style.display = 'inline-block'
       }
       function showfullimagepic6(){
        document.getElementById('pic2').style.height = '300px'
        document.getElementById('pic2').style.width = '300px'
         document.getElementById('pic2').style.marginLeft = '20px'
        document.getElementById('pic1').style.display = 'none'
        document.getElementById('pic3').style.display = 'none'
        document.getElementById('pic1').style.display = 'none'
        document.getElementById('pic2').style.display = 'none'
        document.getElementById('pic3').style.display = 'none'
        document.getElementById('pic5').style.display = 'none'
        document.getElementById('pic6').style.display = 'none'
        document.getElementById('pic7').style.display = 'none'
        document.getElementById('pic8').style.display = 'none'
        document.getElementById('pic9').style.display = 'none'
        document.getElementById('pic10').style.display = 'none'
        document.getElementById('pic11').style.display = 'none'
        document.getElementById('pic12').style.display = 'none'
       }
       function returntonormalpic6(){
           document.getElementById('pic2').style.height = '150px'
           document.getElementById('pic2').style.width = '150px'
           document.getElementById('pic2').style.marginLeft = '5px'
           document.getElementById('pic1').style.display = 'inline-block'
           document.getElementById('pic3').style.display = 'inline-block'
       }
       function showfullimagepic7(){
        document.getElementById('pic2').style.height = '300px'
        document.getElementById('pic2').style.width = '300px'
         document.getElementById('pic2').style.marginLeft = '20px'
        document.getElementById('pic1').style.display = 'none'
        document.getElementById('pic3').style.display = 'none'
        document.getElementById('pic1').style.display = 'none'
        document.getElementById('pic2').style.display = 'none'
        document.getElementById('pic3').style.display = 'none'
        document.getElementById('pic5').style.display = 'none'
        document.getElementById('pic6').style.display = 'none'
        document.getElementById('pic7').style.display = 'none'
        document.getElementById('pic8').style.display = 'none'
        document.getElementById('pic9').style.display = 'none'
        document.getElementById('pic10').style.display = 'none'
        document.getElementById('pic11').style.display = 'none'
        document.getElementById('pic12').style.display = 'none'
       }
       function returntonormalpic7(){
           document.getElementById('pic2').style.height = '150px'
           document.getElementById('pic2').style.width = '150px'
           document.getElementById('pic2').style.marginLeft = '5px'
           document.getElementById('pic1').style.display = 'inline-block'
           document.getElementById('pic3').style.display = 'inline-block'
       }

       function showfullimagepic8(){
        document.getElementById('pic2').style.height = '300px'
        document.getElementById('pic2').style.width = '300px'
         document.getElementById('pic2').style.marginLeft = '20px'
        document.getElementById('pic1').style.display = 'none'
        document.getElementById('pic3').style.display = 'none'
        document.getElementById('pic1').style.display = 'none'
        document.getElementById('pic2').style.display = 'none'
        document.getElementById('pic3').style.display = 'none'
        document.getElementById('pic5').style.display = 'none'
        document.getElementById('pic6').style.display = 'none'
        document.getElementById('pic7').style.display = 'none'
        document.getElementById('pic8').style.display = 'none'
        document.getElementById('pic9').style.display = 'none'
        document.getElementById('pic10').style.display = 'none'
        document.getElementById('pic11').style.display = 'none'
        document.getElementById('pic12').style.display = 'none'
       }
       function returntonormalpic8(){
           document.getElementById('pic2').style.height = '150px'
           document.getElementById('pic2').style.width = '150px'
           document.getElementById('pic2').style.marginLeft = '5px'
           document.getElementById('pic1').style.display = 'inline-block'
           document.getElementById('pic3').style.display = 'inline-block'
       }
       function showfullimagepic9(){
        document.getElementById('pic2').style.height = '300px'
        document.getElementById('pic2').style.width = '300px'
         document.getElementById('pic2').style.marginLeft = '20px'
        document.getElementById('pic1').style.display = 'none'
        document.getElementById('pic3').style.display = 'none'
        document.getElementById('pic1').style.display = 'none'
        document.getElementById('pic2').style.display = 'none'
        document.getElementById('pic3').style.display = 'none'
        document.getElementById('pic5').style.display = 'none'
        document.getElementById('pic6').style.display = 'none'
        document.getElementById('pic7').style.display = 'none'
        document.getElementById('pic8').style.display = 'none'
        document.getElementById('pic9').style.display = 'none'
        document.getElementById('pic10').style.display = 'none'
        document.getElementById('pic11').style.display = 'none'
        document.getElementById('pic12').style.display = 'none'
       }
       function returntonormalpic9(){
           document.getElementById('pic2').style.height = '150px'
           document.getElementById('pic2').style.width = '150px'
           document.getElementById('pic2').style.marginLeft = '5px'
           document.getElementById('pic1').style.display = 'inline-block'
           document.getElementById('pic3').style.display = 'inline-block'
       }

       function showfullimagepic10(){
        document.getElementById('pic2').style.height = '300px'
        document.getElementById('pic2').style.width = '300px'
         document.getElementById('pic2').style.marginLeft = '20px'
        document.getElementById('pic1').style.display = 'none'
        document.getElementById('pic3').style.display = 'none'
        document.getElementById('pic1').style.display = 'none'
        document.getElementById('pic2').style.display = 'none'
        document.getElementById('pic3').style.display = 'none'
        document.getElementById('pic5').style.display = 'none'
        document.getElementById('pic6').style.display = 'none'
        document.getElementById('pic7').style.display = 'none'
        document.getElementById('pic8').style.display = 'none'
        document.getElementById('pic9').style.display = 'none'
        document.getElementById('pic10').style.display = 'none'
        document.getElementById('pic11').style.display = 'none'
        document.getElementById('pic12').style.display = 'none'
       }
       function returntonormalpic10(){
           document.getElementById('pic2').style.height = '150px'
           document.getElementById('pic2').style.width = '150px'
           document.getElementById('pic2').style.marginLeft = '5px'
           document.getElementById('pic1').style.display = 'inline-block'
           document.getElementById('pic3').style.display = 'inline-block'
       }

       function showfullimagepic11(){
        document.getElementById('pic2').style.height = '300px'
        document.getElementById('pic2').style.width = '300px'
         document.getElementById('pic2').style.marginLeft = '20px'
        document.getElementById('pic1').style.display = 'none'
        document.getElementById('pic3').style.display = 'none'
        document.getElementById('pic1').style.display = 'none'
        document.getElementById('pic2').style.display = 'none'
        document.getElementById('pic3').style.display = 'none'
        document.getElementById('pic5').style.display = 'none'
        document.getElementById('pic6').style.display = 'none'
        document.getElementById('pic7').style.display = 'none'
        document.getElementById('pic8').style.display = 'none'
        document.getElementById('pic9').style.display = 'none'
        document.getElementById('pic10').style.display = 'none'
        document.getElementById('pic11').style.display = 'none'
        document.getElementById('pic12').style.display = 'none'
       }
       function returntonormalpic11(){
           document.getElementById('pic2').style.height = '150px'
           document.getElementById('pic2').style.width = '150px'
           document.getElementById('pic2').style.marginLeft = '5px'
           document.getElementById('pic1').style.display = 'inline-block'
           document.getElementById('pic3').style.display = 'inline-block'
       }
       function showfullimagepic12(){
        document.getElementById('pic2').style.height = '300px'
        document.getElementById('pic2').style.width = '300px'
         document.getElementById('pic2').style.marginLeft = '20px'
        document.getElementById('pic1').style.display = 'none'
        document.getElementById('pic3').style.display = 'none'
        document.getElementById('pic1').style.display = 'none'
        document.getElementById('pic2').style.display = 'none'
        document.getElementById('pic3').style.display = 'none'
        document.getElementById('pic5').style.display = 'none'
        document.getElementById('pic6').style.display = 'none'
        document.getElementById('pic7').style.display = 'none'
        document.getElementById('pic8').style.display = 'none'
        document.getElementById('pic9').style.display = 'none'
        document.getElementById('pic10').style.display = 'none'
        document.getElementById('pic11').style.display = 'none'
        document.getElementById('pic12').style.display = 'none'
       }
       function returntonormalpic12(){
           document.getElementById('pic2').style.height = '150px'
           document.getElementById('pic2').style.width = '150px'
           document.getElementById('pic2').style.marginLeft = '5px'
           document.getElementById('pic1').style.display = 'inline-block'
           document.getElementById('pic3').style.display = 'inline-block'
       }