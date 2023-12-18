"use client";
import styles from "./pagination.module.scss";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { usePathname, useSearchParams } from "next/navigation";
import { generatePagination } from "../lib/utils";
import Link from "next/link";

const Pagination = ({ totalPages }: { totalPages: number }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber: string | number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const allPages = generatePagination(currentPage, totalPages);

  return (

    <div className='flex jc-center'>
      <div className={styles.wrapper}>
        <PaginationArrow
          direction="left"
          href={createPageURL(currentPage - 1)}
          isDisabled={currentPage <= 1}
        />
        <div className={styles['page-navigation']}>
          {allPages.map((page, index) => {
            let position: 'first' | 'last' | 'single' | 'middle' | undefined;
            if (index === 0) position = 'first';
            if (index === allPages.length - 1) position = 'last';
            if (allPages.length === 1) position ='single';
            if (page === '...') position ='middle';
            return (
              <PaginationNumber
                key={page}
                href={createPageURL(page)}
                page={page}
                position={position}
                isActive={currentPage === page}
              />
            )
          })}
        </div>
      
        <PaginationArrow
          direction="right"
          href={createPageURL(currentPage + 1)}
          isDisabled={currentPage >= totalPages}
        />
      </div>
    </div>
  );
};

function PaginationNumber({
  href,
  page,
  position,
  isActive,
}: {
  href: string,
  page: string | number,
  position?: 'first' | 'last' | 'middle' | 'single',
  isActive: boolean
}) {
  const className = clsx(styles['number-btn'], {
    [styles['btn-rounded-left']]: position === 'first' || position === 'single',
    [styles['btn-rounded-right']]: position === 'last' || position === 'single',
    [styles['number-btn-active']]: isActive,
    [styles['ellipse-btn']]: position === 'middle'
  })

  return isActive || position === 'middle' ? (
    <div className={className}>{page}</div>
  ) : (
    <Link className={className} href={href}>{page}</Link>
  )
}

function PaginationArrow({
  direction,
  href,
  isDisabled,
}: {
  href: string;
  direction: "left" | "right";
  isDisabled?: boolean;
}) {
  const className = clsx(styles["arrow-btn"], {
    [styles["arrow-btn_disabled"]]: isDisabled,
    [styles["arrow-btn-left"]]: direction === "left",
    [styles["arrow-btn-right"]]: direction === "right",
  });

  const icon =
    direction === "left" ? (
      <ArrowLeftIcon className={styles["arrow-width"]} />
    ) : (
      <ArrowRightIcon className={styles["arrow-width"]} />
    );

  return isDisabled ? (
    <div className={className}>{icon}</div>
  ) : (
    <Link href={href} className={className}>
      {icon}
    </Link>
  );
}

export default Pagination;
