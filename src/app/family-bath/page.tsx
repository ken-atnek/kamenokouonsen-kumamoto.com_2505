/* =======================================
 * 家族湯
 * URL: src/app/family-bath/page.tsx
 * Created: 2025-05-03
 * Last updated: 2025-05-03
 * ======================================= */

import type { Metadata } from 'next';
import PageTitle from '@/components/common/PageTitle';
import FamilyBathDetails from '@/components/family-bath/FamilyBathDetails';

export const metadata: Metadata = {
  title: '家族湯 | 亀の甲温泉',
  description:
    '完全プライベートな家族湯。バリアフリー対応のお風呂もあります。源泉かけ流しの美人の湯を家族でお楽しみください。熊本県菊池市泗水町の亀の甲温泉です。',
  alternates: { canonical: 'https://kamenokouonsen-kumamoto.com/family-bath/' },
};
import FamilyBathHead from '@/components/family-bath/FamilyBathHead';

export default function FamilyBath() {
  return (
    <>
      <PageTitle titleJp="家族湯" titleEn="Family Bath" />
      <FamilyBathHead />
      <FamilyBathDetails />
    </>
  );
}
