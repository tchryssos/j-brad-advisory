import styled from '@emotion/styled';
import { Flex, Paper, Text, Title } from '@mantine/core';

import { Image } from '~/components/Image';
import { Layout } from '~/components/meta/Layout';

const BgImage = styled(Image)`
  height: 100%;
  width: 100%;
  position: absolute;
`;

const AboutWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: red;
  display: flex;
  justify-content: center;
`;

function About() {
  return (
    <Layout title="About - J. Bradford Advisory">
      <AboutWrapper>
        <Paper
          h="fit-content"
          m={{ base: 20, md: 40 }}
          p={{ base: 20, md: 40 }}
          pos="relative"
          radius={16}
          w="100%"
        >
          <Title order={1}>About Joanne Bradford</Title>
          <Flex direction="column" gap={16}>
            <Text>
              Experienced Operating Executive and independent board member with
              a demonstrated track record in technology, media and financial
              services. Expert DTC/B2B product marketer and revenue leader,
              skilled in Product development, ROI, Brand Building, Performance
              Marketing, Operations, Sales and Social Impact.
            </Text>
            <Text>
              I&apos;ve helped build companies and products at start ups and
              Fortune 50 companies including Pinterest, SoFi, Microsoft and
              PayPal. I&apos;ve been part of a team with 3 employees and a
              leader of 2500 employees, growing revenue from zero to billions at
              multiple companies by building high functioning adaptable teams
              and new product offerings.
            </Text>
            <Text>
              My passion is developing leaders and building teams. I love to
              solve problems, do detailed work and focus on the right outcomes.
              I champion diversity through action and accountability. My belief
              is in the right environment, everyone can have an impact. The
              companies I work with focus on having positive impacts on
              consumers&apos; lives. At Honey and SoFi, we focused on saving
              people money, at Pinterest we focused on giving people a creative
              connection.
            </Text>
            <Text>
              I have extensive experience in merger and acquisitions,
              fundraising and the IPO process as a board member and executive.
            </Text>
          </Flex>
        </Paper>
      </AboutWrapper>
    </Layout>
  );
}

export default About;
