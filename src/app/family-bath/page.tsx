/* =======================================
 * 家族湯
 * URL: src/app/family-bath/page.tsx
 * Created: 2025-05-03
 * Last updated: 2025-05-03
 * ======================================= */

import PageTitle from '@/components/common/PageTitle';
import FamilyBathDetails from '@/components/family-bath/FamilyBathDetails';
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
