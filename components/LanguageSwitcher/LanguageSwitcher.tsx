"use client";

import { Button } from "@mantine/core";
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

export function LanguageSwitcher(): React.ReactNode {
  const t = useTranslations("language");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleSwitch = (): void => {
    const newLocale = locale === "ja" ? "en" : "ja";
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname);
  };

  return (
    <Button variant="subtle" size="sm" onClick={handleSwitch}>
      {t("switch")}
    </Button>
  );
}
