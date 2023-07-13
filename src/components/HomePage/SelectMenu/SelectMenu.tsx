"use client";
import { Container } from "@/common/Container";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Bar } from "@/page/Bar/bar";
import { Kitchen } from "@/page/kitchen";
import { Response } from "@/page/response";
import { Button } from "@/common/Button";
import Icon from "./static/icon.png";
import Image from "next/image";

export function SelectMenu() {
  return (
    <section className="bg-slate-200 ">
      <Container>
        <div className="flex flex-col gap-3 py-3">
          <Button>
            <div className="flex justify-between">
              <Link to="/kitchen">Меню кухні</Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </Button>

          <Button>
            <div className="flex justify-between">
              <Link to="/bar">Меню бару</Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </Button>
          <Button>
            <div className="flex justify-between">
              <Link to="/response">Меню десертів</Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </Button>
        </div>
      </Container>
    </section>
  );
}
