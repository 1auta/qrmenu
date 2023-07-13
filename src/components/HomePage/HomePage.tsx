"use client";
import { Hero } from "./Hero/Hero";
import { SelectMenu } from "./SelectMenu/SelectMenu";
import { Container } from "@/common/Container";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Bar } from "@/page/Bar/bar";
import { Kitchen } from "@/page/kitchen";
import { Response } from "@/page/response";
import { Button } from "@/common/Button";
import Icon from "./static/icon.png";
import Image from "next/image";

export function HomePage() {
  return (
    <>
      <Hero />
      <Router>
        <SelectMenu />
        <Routes>
          <Route path="/kitchen" element={<Kitchen />} />
          <Route path="/bar" element={<Bar />} />
          <Route path="/response" element={<Response />} />
        </Routes>
      </Router>
    </>
  );
}
