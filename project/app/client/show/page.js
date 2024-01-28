// 'use client'
// import { useState } from "react";

import Link from "next/link";

// так создается клиентский компонент на серверном



export default function Show() {
  return (
    <div>
      <h1>Show страница</h1>
      <Link href='/'>Главная</Link><br />
      <Link href='/client/12345'>Клиент 12345</Link>
    </div>
   
  );
}