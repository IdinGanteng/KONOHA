import React from 'react';
import Konoha from '../aset/konoha.jpg'
const Dashboard = () => {
  return (
    <div className='card-dashboard'>
      <h3>KONOHAGAKURE</h3>
      <p>Konohagakure Secara harfiah memiliki arti Hidden Village Among Tree Leaves
         adalah Desa Yang Tersembunyi di Tanah Api dan lebih sering disebut Desa Konoha.
         Sebagai salah satu dari lima Desa Ninja Besar,
         Konohagakure memiliki Kage (pemimpin) yang dikenal sebagai Hokage.
         Ada tujuh Hokage yang memimpin sebelum Naruto. Di sebuah gunung yang menghadap
         desa dari utara ada Monumen Hokage berupa ukiran wajah mereka di dinding batu. </p>
         <img className='konoha' src={Konoha}/>
    </div>
  )
}

export default Dashboard